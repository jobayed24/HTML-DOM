function myFunction(){
 const getColor=document.getElementById("myDIV");
console.log(getColor.className)
 if(getColor.className=="addcolor"){
    getColor.className="newcolor";
 }else{
    getColor.className="addcolor";
 }

 console.log(getColor.classList)
}