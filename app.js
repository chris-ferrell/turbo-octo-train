document.getElementById("btn").addEventListener("click", generateBoard);
document.getElementById("btn1").addEventListener("click", createship);
document.addEventListener('keydown', function(){
    const button = document.getElementById("btn");
    const button2 = document.getElementById("btn1");
    const div = document.createElement("div")
    div.innerHTML = "BATTLESHIP";

    document.body.appendChild(div);

    button.style.display = "block";
    button2.style.display = "block";

    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.top = "0";
    div.style.width = "100%";

})

// displayMiss: function(location) {
//     var cell = document.getElementById(location);
//     cell.setAttribute("class","miss");
// }
// };





function logBoxes(event) {
    const td = event.target.parentNode; // gets the id of cell || <td>  instead of the <div>'s id
    const id = td.getAttribute("id");

    const clk_id = event.target.id;
    const clk_td = document.getElementById(id);
    if(id == "boat"){
        console.log("boat hit!")
        //td.classList.add("hit")
        //td.classList.add("add_boat")
        event.target.classList.add("add_boat");
        //clk_td.style.backgroundImage = "url(ship.png)";
        //console.log(document.getElementById(id));
        //document.getElementById(`${div_id}`).style.backgroundImage = "url('./ship.png')" ;
        //event.target.style.backgroundImage = "url('./ship.png')";
        // change something to indecate the boat was hit 
    } else {
        //td.style.backgroundImage = "url('./wave.png')";
        //document.getElementById(`${div_id}`).style.backgroundImage = "url('./wave')" ;
        //console.log(document.getElementById(id));
        //clk_td.style.backgroundImage = "url(wave.png)";
        event.target.classList.add("add_water")
        //td.classList.add("add_water")
        console.log("miss")
        //td.classList.add("miss")
    } 
    //console.log("clicked");



  }


function list(arrSize) {
  let list = [];
  for (let i = 1; i <= arrSize; ++i) {
    list.push(i);
    if (i == arrSize) {
      return list;
    }
  }
}
// generator function
function* getTableRow(list, amountOfCells = 1) {
  for (let index = 0; index < list.length; index += amountOfCells) {
    yield list.slice(index, index + amountOfCells);
  }
}

//activates generator loop this function !!!NO LONGER NEEDED, MERGED WITH generateBoard
function tableRow(arr = list(100), boardSize = 10) {
  const row = getTableRow(arr, boardSize);
  return row;
}

const letter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
];




function generateBoard(arr) {


    const letter = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
      ];
  // generator obj this is needed to use .next
  const obj = getTableRow(list(100), 10);
  //create table
  const table = document.createElement("table");
  table.setAttribute("id", "table");

  for (let i = 0; i <= 10; i++) {
    let loopSize = obj.next().value;

    if (loopSize === undefined) {
      break; /* exit the loop if there are no more values */
    }

    // create a new row with a header cell
    const tr = document.createElement("tr");
    tr.setAttribute("id", `tr_${i}`);
    const th = document.createElement("th");
    th.setAttribute("id",`${letter[i]}`)
    th.innerText = `${letter[i].toUpperCase()}`;
    tr.appendChild(th);

    for (let j = 0; j < loopSize.length; j++) {
      const td = document.createElement("td");
      td.setAttribute("class",`${letter[i]}`)
      td.classList.add("boxes");
      td.classList.add(`cell-${j}`)
      const div = document.createElement("div");
      div.setAttribute("id", `cell_${j}`);
      //iv.setAttribute("class", "boxes");
      
      //div.innerText = `cell_${loopSize[j]}`;
      td.appendChild(div);
      tr.appendChild(td);

      //console.log(`cell_${loopSize[j]}`);
    }
    // append row to table
    table.appendChild(tr);
  }
  
  // append table to body
  document.body.appendChild(table);

  const boxes = document.querySelectorAll(".boxes");
  
    
      for (let i = 0; i < boxes.length; ++i){
        //console.log(boxes[i].id)
        boxes[i].addEventListener("click",logBoxes);
      }
  
}

function isValid(row,col){
    let rows = document.getElementById("table").rows
    for(let i = 0; i < rows.length; ++i){
        if(row == rows[i].cells[0].id){
            for(let j = 0; j < rows[i].length; ++j){
                if(col == rows[i].cells[j].className == "boat"){
                    return false
                } else {
                    return true
                }
            }
        }
    }
}
function createship() {
    const letterRow = letter[Math.floor(Math.random() * letter.length)];
    const startCol = Math.floor(Math.random() * 10);
    const startRow = Math.floor(Math.random() * 10);
    function num(){
        let col = Math.floor(Math.random() * 10); 
        return col;
    }
   


    let allRows  = document.getElementById("table").rows
    
    for (let i = 0; i < 3; ++i){ // places x amount of boats 
       
        allRows[num()].cells[num()].setAttribute("id","boat");

        console.log(`Row ${startRow} Col ${startCol}`)
       
       
    }

}