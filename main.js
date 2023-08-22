document.getElementById("fname").addEventListener("blur",myFunction);

function myFunction(){
  let inputValue=document.getElementById("fname");
  if(inputValue.value==""){
    window.alert("Write your name");
  }else{
    inputValue.value=inputValue.value.toUpperCase();
  }
}