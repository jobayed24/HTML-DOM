const firstValue=document.addEventListener("mousemove",randFunction);

function randFunction(){
    document.getElementById("demo").innerHTML=Math.random();
}


function removeEle(){
    document.removeEventListener("mousemove",randFunction);
}

const newConValue=document.getElementById("demo").innerHTML;

