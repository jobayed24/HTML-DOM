let getSelectValue=document.getElementById("mySelect");


getSelectValue.addEventListener("change",selectDataChange);

function selectDataChange(){
  document.getElementById("demo").innerHTML="You are selected "+getSelectValue.value;
}
