// HTML ELEMENTS

let quantityInputElement = document.querySelector(".supplement-value-input-box");
let addButtonElement = document.querySelector(".add-button");
let addedSupplementsList = document.getElementById("supplements-added-list");
let supplementButtonElements = document.querySelectorAll('.supplement-button');
let lastClickedSupplement;
let supplementArray = [];
//let deleteButtonElement;

// EVENT LISTENERS
addButtonElement.addEventListener('click', addNewSupplementIntake);
addedSupplementsList.addEventListener('click', deleteCheck);


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

    if (lastClickedSupplement == null || quantityInputElement.value == "" ||
        quantityInputElement.value <= 0) {
        quantityInputElement.value = null;
        return;
    }
    else {

        //If Supplement is already added, increase quantity
        let alreadyAddedSupplement = document.getElementById(lastClickedSupplement)

        if (alreadyAddedSupplement == null) {
            let supplementNameElement = document.createElement('li')
            let supplementQuantityElement = document.createElement('span');
            deleteButtonElement = document.createElement('button');


                let newSuppObject = {
                    name: lastClickedSupplement,
                    quantity: quantityInputElement.value
                };

            supplementNameElement.textContent = `${lastClickedSupplement}`
            supplementQuantityElement.textContent = quantityInputElement.value;
            deleteButtonElement.textContent='DEL'
            deleteButtonElement.setAttribute("class", "delete-btn");
            

            supplementQuantityElement.setAttribute("id", lastClickedSupplement);
            supplementNameElement.appendChild(supplementQuantityElement);
            supplementNameElement.appendChild(deleteButtonElement);

            addedSupplementsList.appendChild(supplementNameElement);

            supplementArray.push(newSuppObject);

            lastClickedSupplement = null;
            quantityInputElement.value = null;

        }
        else {
            let previousQuantity = parseInt(alreadyAddedSupplement.textContent, 10);
            let newQuantity = previousQuantity + parseInt(quantityInputElement.value, 10);
            if (isNaN(newQuantity) || newQuantity <= 0) {

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

function deleteCheck(event){

    let button = event.target;
    if(button.classList[0] === 'delete-btn')
    {
       let supp = button.parentElement;
       supp.remove();
    }
}

// function getSupplementName(event){
//   let buttonClicked = event.target;
//   console.log(buttonClicked);
// }