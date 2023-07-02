document.addEventListener("mouseover",firstEvent);
document.addEventListener("mouseout",secondEvent);
document.addEventListener("click",thirdEvent);


function firstEvent(){
    document.getElementById("demo").innerHTML="Mouse Over";
}

function secondEvent(){
    document.getElementById("demo").innerHTML="Mouse Out";
}

function thirdEvent(){
    document.getElementById("demo").innerHTML="Clicked !";
}