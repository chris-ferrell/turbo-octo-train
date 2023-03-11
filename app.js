document.getElementById("btn").addEventListener("click", generateBoard, () => {
    const scoreCount = document.getElementsId("score");
    scoreCount.style.display = "block"
    
});
//document.getElementById("btn1").addEventListener("click", createship);







var counter  = 0;
function logBoxes(event) {
    
    const td = event.target.parentNode; // gets the id of cell || <td>  instead of the <div>'s id
    const id = td.getAttribute("id");
    const MessageArea = document.getElementById("messageArea");

    
    if(id == "boat"){
        counter++
        
        console.log("boat hit!")
        MessageArea.innerHTML = "Boat Hit!"
        
        event.target.classList.add("add_boat");
        //ends game
        if (counter > 10 || counter == 10 ){
            MessageArea.innerHTML = "GAME OVER"
            return 
        }
       
        
        
       
    } else {
        MessageArea.innerHTML = "it's a miss!"
        
        event.target.classList.add("add_water")
        
        console.log("miss")
       
    } 
    



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
  table.classList.add("board")

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

  const outerDiv = document.createElement("div");

  outerDiv.setAttribute("id","outerDiv");
  
  outerDiv.appendChild(table);
 
  // append table to body
  document.body.appendChild(outerDiv);
  
  
  //adds event listeners to all Rows and Cells
  const boxes = document.querySelectorAll(".boxes");
  
    
      for (let i = 0; i < boxes.length; ++i){
        
        boxes[i].addEventListener("click",logBoxes);
      }

   createship();
  
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
function createship(ships =0,length = 3) {
    const letterRow = letter[Math.floor(Math.random() * letter.length)];
    const startCol = Math.floor(Math.random() * 10);
    const startRow = Math.floor(Math.random() * 10);
    function num(){
        let col = Math.floor(Math.random() * 10); 
        return col;
    }
   


    let allRows  = document.getElementById("table").rows
    if (ships == 0){
        for (let i = 0; i < 10; ++i){ // places x amount of boats 
            //places single boats
            allRows[num()].cells[num()].setAttribute("id","boat");
    
            console.log(`Row ${startRow} Col ${startCol}`)
           
           
        } 
    } else if (length == 3){
        let placedShips = 0;

        do {
            let validArray = []
            for (let i=0; i < length; ++i){
                validArray.push(isValid(startRow,startCol + i))
            } for (let i = 0; i < validArray.length; ++i){
                if(validArray[i] === false) {
                    break 
                } else {
                    allRows[startRow].cells[startCol + 1].setAttribute("id","boat");
                }
            }
            ++placedShips
        } while (placedShips != ships)
        // places X amt of ships
        for (let i = 0; i <= ships; ++i){
            for (let j = 0; j < length; ++j){
                //places 3 cell long boats

            }
        }
    }
    

}