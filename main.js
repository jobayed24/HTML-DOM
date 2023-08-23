const getInputValue=document.getElementById("finput");

getInputValue.onblur=function(){myOnBlure()}

function myOnBlure(){
  if(getInputValue.value==""){
    alert("Field is empty")
    getInputValue.style.backgroundColor="red";
    getInputValue.value="Put Something here";
  }else{
    getInputValue.value=getInputValue.value.toUpperCase();
    getInputValue.style.backgroundColor="green";
    getInputValue.style.color="white";
  }
}