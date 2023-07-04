const myAccessKey=document.getElementById("w3s");

const store=document.createAttribute("accesskey");

store.value="w";

const newValue=myAccessKey.setAttributeNode(store);

const retrivedAccessKey=document.getElementById("demo").innerHTML=myAccessKey.accessKey;


console.log(retrivedAccessKey);