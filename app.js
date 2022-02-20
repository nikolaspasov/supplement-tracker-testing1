let inputElement = document.querySelector(".supplement-value-input-box");
let addButtonElement = document.querySelector(".add-button");


addButtonElement.addEventListener('click', printData);

function printData(event){
event.preventDefault();
console.log(inputElement.value);
inputElement.value = null;
}