const getImgID=document.getElementById("myImg").attributes;


let text="";

for( let i=0;i<getImgID.length; i++){
    text+=getImgID[i].name+" : "+getImgID[i].nodeValue+"<br />";
}

document.getElementById("demo").innerHTML=text;
console.log(text);