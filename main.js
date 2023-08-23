
window.onbeforeprint=function(){myBeforePrint()}
window.onafterprint=function(){myAfterPrint()}
function myBeforePrint(){
  alert("Are you sure to Printing");
}
function myAfterPrint(){
  alert("Thank you for Printing");
}

