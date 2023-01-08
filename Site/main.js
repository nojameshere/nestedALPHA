// import { modalBuilder } from "/Site/modalBuilder.js";

const plusButton = document.querySelector("#newItem");
const newItemModal = document.querySelector("#newItemModal") //Use this for the entire Modal.
const closeButton = document.querySelector(".closeModal");
const cancelButton = document.querySelector(".cancelButton");
const createItem = document.querySelector(".createItem");
const itemTypeDropdown = document.querySelector("#itemTypeMenu");
const itemTypeButton = document.querySelector(".dropdownButton")
const addField = document.querySelector(".add-field");
const modalBody = document.querySelector(".modal-body");
const additionalFields = document.querySelector(".additionalFields");
const itemName = document.querySelector(".itemName");
const itemDescription = document.querySelector(".description");
const itemValue = document.querySelector(".value");
const itemPurchaseDate = document.querySelector(".purchaseDate");

let itemProperty = ["name", "parentItem", "childItem", "price", "description", "purchaseDate"]
let itemType = ["electronic", "collectable", "plush"];
function buildItemTypes(type){
    let itemTypeHTML = `<li><a class="dropdown-item" >${type}</a></li>`
    itemTypeDropdown.innerHTML += itemTypeHTML;
}
itemType.forEach(buildItemTypes);
function clearNewItemModal(){
    additionalFields.innerHTML = '';
    itemName.value = '';
    itemDescription.value = '';
    itemValue.value = '';
    itemPurchaseDate.value = '';
}
//This is the blue new item button
plusButton.addEventListener('click', e => {
    e.preventDefault();
    console.log("Click");
    newItemModal.classList.add("shown");
});
//for adding an aditional field to the item
addField.addEventListener('click', e => {
    e.preventDefault();
    additionalFields.innerHTML += `<div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Custom Data">
                            </div>`
})
closeButton.addEventListener('click', e => {
    console.log("The close x has been clicked.")
    e.preventDefault();
    newItemModal.classList.remove("shown");
    clearNewItemModal()
});

cancelButton.addEventListener('click', e => {
    e.preventDefault();
    newItemModal.classList.remove("shown");
    clearNewItemModal();
})

itemTypeButton.addEventListener('click', e => {
    if (itemTypeDropdown.classList.contains("show")) {
        itemTypeDropdown.classList.remove("show");
    } else {
        itemTypeDropdown.classList.add('show');
        itemTypeDropdown.style = "position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(285px, 40px);";
    }
})

createItem.addEventListener('click', e => {
    e.preventDefault();
    //get data and add to a 2D array of properties.
    //package as a JSON file
    //send to database
    //call method to clear Add New Item Card.
});

//Function to pull data from database

//function to parse JSON data into a 2d array


