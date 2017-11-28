const GRID_WIDTH = 500;
const BORDER_WIDTH = 1;

$(document).ready(() => {
  createGridInline(16, 16, GRID_WIDTH / 16);

  $('#clear').on('click', clearGrid);
});

function createGridInline(rows, columns, tilesPerSide) {
  let gridContainer = $('#grid-container');
  for (var row = 0; row < rows; row++) {
    let rowContainer = $('<div></div>');
    rowContainer.addClass('row-container');
    gridContainer.append(rowContainer);
    for (var column = 0; column < columns; column++) {
      let gridElement = $('<div></div>');
      rowContainer.append(gridElement);
      gridElement.addClass('grid-element');
    }
  }

  $('.row-container').css({'width' : `${GRID_WIDTH}px`,
                         'height' : `${tilesPerSide}px`});
  $('.grid-element').css({'width' : `${tilesPerSide - 2 * BORDER_WIDTH}px`,
                         'height' : `${tilesPerSide - 2 * BORDER_WIDTH}px`});

  $('.grid-element').on('mouseenter', changeColor);
}

function changeColor() {
  let color = getRandomColor();
  let decrement = null;

  if ($(this).data('color') !== undefined) {
    color = $(this).data('color');
    decrement = $(this).data('decrement');
    color = darkenColor(color, decrement);
  }
  else {
    decrement = getDecrement(color);
    $(this).data('decrement', decrement);
  }

  $(this).css('background-color', `rgb(${color.red}, ${color.green}, ${color.blue})`);
  $(this).data('color', color);
}

function getRandomColor() {
  return {'red': Math.floor(Math.random() * 255),
          'green': Math.floor(Math.random() * 255),
          'blue': Math.floor(Math.random() * 255)};
}

function getDecrement(color) {
  return {'red': Math.round(color.red / 10),
          'green': Math.round(color.green / 10),
          'blue': Math.round(color.blue / 10)};
}

function darkenColor(color, decrement) {
  color.red = clamp(color.red - decrement.red, 0);
  color.green = clamp(color.green - decrement.green, 0);
  color.blue = clamp(color.blue - decrement.blue, 0);

  return color;
}

function clamp(value, minValue) {
  if (value < minValue)
    value = minValue;
  return value;
}

function clearGrid() {
  $('#grid-container').empty();
  let tilesPerSide = parseInt(prompt('How many squares per side?', 16));
  let tileSize = GRID_WIDTH / tilesPerSide;

  createGridInline(tilesPerSide, tilesPerSide, tileSize);
}
