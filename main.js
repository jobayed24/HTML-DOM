const fruits=['apple','pineapple','orange','coconut','cucomber'];


const dfg=document.createDocumentFragment();
console.log(dfg);
for( let x in fruits){
    const li=document.createElement("li");
    li.textContent=fruits[x];
    dfg.appendChild(li);    
}


console.log(dfg);
document.getElementById("myList").appendChild(dfg);