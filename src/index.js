const drawingPad = document.querySelector("#drawing-pad");
let currentColor = "black";

let drawing = false;
let height = "10px";
let width = "10px";

function saveSettings() {
  localStorage.setItem("color", currentColor);
}
function changecolor() {
  currentColor = prompt("type a color");
}
function setColor(color) {
  currentColor = color;
}

drawingPad.onmousedown = function(e) {
  drawing = true;
};

drawingPad.onmouseup = function() {
  drawing = false;
};

drawingPad.onmousemove = function(e) {
  if (drawing) {
    drawingPad.innerHTML += `<div class="mark" style="left:${e.offsetX}px;top:${
      e.offsetY
    }px;background-color:${currentColor};height:${height};width:${width}"></div>`;
  }
};

function setfont(size) {
  height = size;
  width = size;
}
