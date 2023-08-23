// disable context menu


let getContextMenu=document.getElementById("myDiv");

getContextMenu.addEventListener("contextmenu",e=>{e.preventDefault()});