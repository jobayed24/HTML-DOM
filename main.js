let getSelectValue=document.getElementById("mySelect");


getSelectValue.addEventListener("change",selectDataChange);

function selectDataChange(){
  let submitButton=document.getElementById("optionSubmit");
  submitButton.addEventListener("click",showData);
  function showData(){
    document.getElementById("demo").innerHTML=getSelectValue.value;
  }
}
