const para=document.createElement("button");
para.innerText="Hello Button";
document.getElementById("myDIV").appendChild(para);

const newbutton=document.createAttribute("onclick");
function hmm(){
    document.getElementById("myDIV").innerHTML="This is explore new things ";
}
newbutton.value="somethings";


document.getElementsByTagName("button")[0].setAttributeNode(newbutton);

console.log(newbutton);