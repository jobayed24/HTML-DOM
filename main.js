/// without variable there are problem to store data 

const buttonB=document.querySelector("#_button")

const printValue=document.querySelector("#demo")



buttonB.onclick =() =>{
    alert(`Hello ${prompt("What is your name ?")} , nice to meet you`);

    printValue.textContent=`Hello ${prompt("What is your name")}`
}