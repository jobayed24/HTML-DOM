function makeAnimate(){
  const getAnimate=document.getElementById('animate');
  const getRightAnimate=document.getElementById("righAnimate");
  let righID=null;
  let rightPos=0;

  clearInterval(righID);

  rightID=setInterval(righAnimate,5);
  function righAnimate(){
    if(rightPos==450){
      clearInterval(righID)
    }else{
      
      rightPos++;
      getRightAnimate.style.top=rightPos+"px";
      getRightAnimate.style.right=rightPos+"px"
    }
  }



  let id=null;
  let pos=0;
  clearInterval(id);
  id=setInterval(myMove,5);
  function myMove(){
    if(pos==450){
      clearInterval(id)
    }else{
      pos++;
      getAnimate.style.top=pos+"px";
      getAnimate.style.left=pos+"px";
    }
  }

}