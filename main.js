

    let getH1=document.getElementsByTagName("h1")[0];
let getBlueButton=document.getElementById("blue");
let getAttr;
// add class attributes and add blue color by eventlistener
getBlueButton.addEventListener("click",getAttr=function(){
    let getAttr=document.createAttribute("class");
    getAttr.value='blue';
    getH1.setAttributeNode(getAttr);
    
    
})
//remove attributes node here or remoe by remove elements
let getRemoveButton=document.getElementById("removeBlue");
getRemoveButton.addEventListener('click',function(){
    
let getclassattr=getH1.removeAttribute("class")
})

