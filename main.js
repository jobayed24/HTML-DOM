let getTextValue=document.getElementById("myDiv");


getTextValue.addEventListener('focusin',myFocusIn);

function myFocusIn(){
  getTextValue.value="";
  getTextValue.addEventListener('change',function(){
    document.getElementById("demo").innerHTML=getTextValue.value.toUpperCase();
  })
  getTextValue.addEventListener('focusout',function(){
    let newElement=document.createElement("div");
    newElement.setAttribute("id",'jk');
    
    newElement.style.backgroundColor="red";
    newElement.style.height="300px";
    newElement.style.width="300px";
    newElement.innerHTML="jk";
    console.log(newElement);

  })
}