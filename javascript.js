const container = document.getElementById('container');
const maxWidth = 400;
let size = 16;

window.addEventListener('load', defaultRows);

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

const rainbow = document.getElementById('rainbow');
rainbow.addEventListener('click', makeRainbow);

const custom = document.getElementById('custom');
custom.addEventListener('click', setGrid);

const eraser = document.getElementById('eraser');
const eraseBox = document.getElementsByClassName('box');


eraser.addEventListener('click', function (eraseBox) {
    eraseBox.style.borderLeft = " white 1px solid";
    eraseBox.style.backgroundColor = "white";
    eraseBox.style.borderBottom = " white 1px solid";
});

function defaultRows(){
    
    let box;

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < size; j++) {
          box = document.createElement('div');
          box.className = "box";
          box.addEventListener('pointerover', function(e) {
            e.target.style.borderLeft = " black 1px solid";
            e.target.style.backgroundColor = "black";
            e.target.style.borderBottom = " black 1px solid";
        });
          row.appendChild(box);
        }
        document.getElementById('container').appendChild(row);
        
        var boxes = document.getElementsByClassName("box");
        for (k = 0; k < boxes.length; k++) {
          boxes[k].style.width = maxWidth / size + "px";
          boxes[k].style.height = maxWidth / size + "px";
        }
    }
}                      

function erase(){

         let box = document.getElementsByClassName('box');
          box.addEventListener('pointerover', function(e) {
            e.target.style.borderLeft = " white 1px solid";
            e.target.style.backgroundColor = "white";
            e.target.style.borderBottom = " white 1px solid";
        });
    
        
}

function rainbowRows(){
    
    let box;

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < size; j++) {
          box = document.createElement('div');
          box.className = "box";
          box.addEventListener('pointerover', changeColor);
          row.appendChild(box);
        }
        document.getElementById('container').appendChild(row);
        
        var boxes = document.getElementsByClassName("box");
        for (k = 0; k < boxes.length; k++) {
          boxes[k].style.width = maxWidth / size + "px";
          boxes[k].style.height = maxWidth / size + "px";
        }
    }
}

function changeColor(e) {
    const Color1 = Math.floor(Math.random() * 256);
    const Color2 = Math.floor(Math.random() * 256);
    const Color3 = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
    e.target.style.borderLeft = `rgb(${Color1}, ${Color2}, ${Color3})1px solid`;
    e.target.style.borderBottom = `rgb(${Color1}, ${Color2}, ${Color3})1px solid`;
}

function setGrid() {
    let newSize = prompt("Enter desired grid size from 1 to 100");
    let desiredValue = parseInt(newSize);
    if (desiredValue > 1 && desiredValue <= 100) {
      size = newSize;
      clearGrid();
      defaultRows();
    } else {
      alert("Enter a digit from 1-100 range!");
    }
}

function clearGrid() {
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
}

function resetGame() {
    clearGrid();
    defaultRows();
}    

function makeRainbow() {
   
    clearGrid();
   rainbowRows();
}
