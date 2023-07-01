const fValues=document.forms["frm1"];



let x = fValues.length;

let text="";

for(let i=0; i<x; i++){
    text+=fValues.elements[i].value+"<br/ ><br />";
}
document.getElementById("demo").innerHTML=text;   


console.log(text);


