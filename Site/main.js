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
function queryDocument(){
    console.log('click');
};
queryDocument();

let itemProperty = ["name", "parentItem", "childItem", "price", "description", "purchaseDate"]
let itemType = ["electronic", "collectable", "plush"];
function buildItemTypes(type){
    let itemTypeHTML = `<li><a class="dropdown-item" >${type}</a></li>`
    itemTypeDropdown.innerHTML += itemTypeHTML;
}
itemType.forEach(buildItemTypes);
class Item {
    constructor(name) {
        this.name = name;
        this.parent;
        this.child;
    }
}
function clearAddItemModal(){
    newItemModal.innerHTML = ``
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
    modalBody.innerHTML += `<div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Custom Data">
                            </div>`
    queryDocument();
})
closeButton.addEventListener('click', e => {
    e.preventDefault();
    newItemModal.classList.remove("shown");
});

cancelButton.addEventListener('click', e => {
    e.preventDefault();
    newItemModal.classList.remove("shown");
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
function itemDataArray(){

}

//function to call the modalBuilder function and update the modal 

