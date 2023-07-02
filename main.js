const getAnchors= document.getElementsByTagName("a");

let x=getAnchors.length;

let text="";

for(let i=0; i<x; i++){
    text+=getAnchors[i].innerHTML+"<br >";
}


document.getElementById("demo").innerHTML=text;

console.log(getAnchors);