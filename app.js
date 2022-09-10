let i = 0;
let j = 0;

const container = document.getElementById("container");

// const reset = document.querySelector("#reset");
// reset.addEventListener('click', deleteRow, false);


const numSquares = document.querySelector('#squareNumber');

numSquares.addEventListener('click', makeRows);

function makeRows() {

  let rows = prompt("number of squares");
 
  
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  
 
  let a = container.childNodes.length;
  
  //if (i = j)
  //{
      while (i < (rows * rows))
    {
      let cell = document.createElement("div");
      cell.className = "gridItem";
      cell.style.width = "100%";
      container.appendChild(cell);
      i++;

      cell.addEventListener('mouseover', function (e) {
      e.target.style.width= "1px solid";
      e.target.style.backgroundColor = "orange";
      });
    } 
  }

  // else if(i > j)
  //   {
  //     while (j < a){
  //     let gridItem = document.querySelector(".gridItem");
  //     container.removeChild(gridItem);;
  //       a--;
  //     }
  //   }
//}  

// function deleteRow(){
//  let i = container.childNodes.length;
//   let j= 0;
//   if (j < i)
//   {
//     while (j < i){
//     let gridItem = document.querySelector(".gridItem");
//     container.removeChild(gridItem);;
//       i--;
    
//   }}
// }
