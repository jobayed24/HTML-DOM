let getBodyElement=document.getElementsByTagName("body")[0];

getBodyElement.addEventListener('click',getTagName);

function getTagName(){
  let getInput=document.activeElement.tagName;
  document.getElementById("demo").innerHTML=getInput;

}

// console.log(getBodyElement);