
let getButton=document.getElementById("getButton");

getButton.addEventListener('click',function(){
    let x;
    if(confirm("Are you sure?")){
        x="You are deleted";
    }else{
        x="You canceled";
    }
    document.getElementById("demo").innerHTML=x;
})