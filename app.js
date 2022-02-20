// HTML ELEMENTS

let quantityInputElement = document.querySelector(".supplement-value-input-box");
let addButtonElement = document.querySelector(".add-button");
let addedSupplementsList = document.getElementById("supplements-added-list");
let supplementButtonElements = document.querySelectorAll('.supplement-button');
let lastClickedSupplement;
let supplementArray = [];

// EVENT LISTENERS
addButtonElement.addEventListener('click', addNewSupplementIntake);



// EVENT LISTENER FOR EVERY SUPPLEMENT BUTTON
supplementButtonElements.forEach(supplementButton => {
    supplementButton.addEventListener
        ('click', function () {
            lastClickedSupplement = supplementButton.textContent;
        });
});

// FUNCTIONS
function addNewSupplementIntake(event) {
    event.preventDefault();

    if (lastClickedSupplement == null || quantityInputElement.value == "") {
        return;
    }
    else {

        //If Supplement is already added, increase quantity
        let alreadyAddedSupplement = document.getElementById(lastClickedSupplement)

        if (alreadyAddedSupplement == null) {
            let supplementNameElement = document.createElement('li')
            let supplementQuantityElement = document.createElement('span');
            let newSuppObject = {
                name: lastClickedSupplement,
                quantity: quantityInputElement.value
            };

            supplementNameElement.textContent = `${lastClickedSupplement} - `
            supplementQuantityElement.textContent = quantityInputElement.value;

            supplementQuantityElement.setAttribute("id", lastClickedSupplement);
            supplementNameElement.appendChild(supplementQuantityElement);
            addedSupplementsList.appendChild(supplementNameElement);

            supplementArray.push(newSuppObject);
            
            lastClickedSupplement = null;
            quantityInputElement.value = null;

        }
        else {
            let previousQuantity = parseInt(alreadyAddedSupplement.textContent, 10);
            let newQuantity = previousQuantity + parseInt(quantityInputElement.value, 10);
            if (isNaN(newQuantity)) {

                return;
            }
            else {
                alreadyAddedSupplement.textContent = newQuantity;
            }
            lastClickedSupplement = null;
            quantityInputElement.value = null;

        }
    }
}

// function getSupplementName(event){
//   let buttonClicked = event.target;
//   console.log(buttonClicked);
// }