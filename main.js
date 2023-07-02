const newEvent=document.addEventListener("click",function(){
    myFunction(p1,p2);
});

let p1, p2;
p1=5;
p2=6;

function myFunction(a,b){
    result=a*b;

    document.getElementById("demo").innerHTML=result;
}