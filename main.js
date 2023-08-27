let myWindow;

function dcOpen(){
 myWindow=window.open('','','width=100,height=100;')
}

function dcClose(){
  if(myWindow){
    myWindow.close();
  }
}

function checkWindow(){
  let x='';
  if(!myWindow){
    x="not opened yet";
  }else{
    if(myWindow.closed){
      x="It has closed";
    }else{
      x="It already open"
    }
    
  }
  document.getElementById('demo').innerHTML=x;
  
}