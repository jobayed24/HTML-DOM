let bodyConetnet=document.getElementsByTagName("h1")[0];
let newUppercase=bodyConetnet.innerHTML.toUpperCase();

bodyConetnet.style.backgroundColor="red";
bodyConetnet.addEventListener('mouseover',removerBackground);
function removerBackground(){
  bodyConetnet.style.backgroundColor="transparent";
  bodyConetnet.style.cursor="pointer";
}


console.log(newUppercase);