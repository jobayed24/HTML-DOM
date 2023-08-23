
// getMyDiv=document.getElementsByTagName("div");

// getMyDiv.click=function(){myFunction};


// function myFunction(){
//   getMyDiv.style.animation="mymove 5s 2"
// }

getMyDiv = document.getElementById("divAnimation");


function myFunction(){
  getMyDiv.style.animation="mymove 5s 2";
}

getMyDiv.addEventListener("animationstart",myAnimationStart);

function myAnimationStart(){
  this.innerHTML="changing addEvent Listner";
  this.style.backgroundColor="green";
}

getMyDiv.addEventListener("animationiteration",myAnimationIteration);
function myAnimationIteration(){
  this.innerHTML="text changing";
  this.style.backgroundColor="yellow";
}

getMyDiv.addEventListener("animationend",myAnimationEnd);
function myAnimationEnd(){
  this.innerHTML="Animation has finished";
  this.style.backgroundColor="blue";
}