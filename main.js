// move item second ul to mainul list
let mainList=document.getElementById("mainList");

let secondList=document.getElementById("secondList");

let itemMove=document.getElementById("itemMove");

itemMove.addEventListener('click',itemMoveFunction)

function itemMoveFunction(){
    let getSecondListValue=secondList.lastElementChild;
    if(getSecondListValue){
    mainList.appendChild(getSecondListValue)
    }
}