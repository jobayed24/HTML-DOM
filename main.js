let getBodyTag=document.body;

let createPElement=document.createElement("p");
let addText=document.createTextNode("Hey this is jobayed");

createPElement.appendChild(addText);

function addPElemnets(){
  getBodyTag.appendChild(createPElement);
}

console.log(getBodyTag)