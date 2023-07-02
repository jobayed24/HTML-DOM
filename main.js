function myFunction(){
 //create attrubutes
    const att=document.createAttribute("class");

    att.value="demoClass";

    let ld=document.getElementsByTagName('h1')[0].setAttributeNode(att);
   

}