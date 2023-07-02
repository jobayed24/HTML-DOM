function getTageName(){
    const newValue=document.activeElement.tagName;

    document.getElementById("demo").innerHTML=newValue;

    console.log(newValue);
}