let getButton=document.getElementById("getButton");

getButton.addEventListener('click',function(){
 let myDocument= window.open();
 myDocument.document.write("<h1>This is new Documents</h1>");
 myDocument.document.write("<p>This is new Pharagraph</p>");
 myDocument.document.close();
})
