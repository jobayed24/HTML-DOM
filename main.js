let getButton=document.getElementById("getButton");

getButton.addEventListener('click',function(){
let person=prompt("Write your name","Jobayed");

let x;
if(person==null || person==""){
    x= "You cancelled";
}else{
    x="Welcome "+person+" We are here to Served for you ";
}
document.getElementById("demo").innerHTML=x;
})