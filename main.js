
function appendData(){

    const getUlList=document.getElementById("myClass");

    const createLiElement=document.createElement("li");
    
    const textNode=document.createTextNode("Another Coffe");
    
    createLiElement.appendChild(textNode);

    getUlList.appendChild(createLiElement);
    
}

