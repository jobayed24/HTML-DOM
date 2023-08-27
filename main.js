function getActive(){
 let mywind=window.open()
 mywind.document.write("Jk")
 setTimeout(mywindfn,3000)
 function mywindfn(){
  mywind.close();
 }

}