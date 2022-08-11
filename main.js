const plusButton = document.querySelector("#newItem");
const newItemModal = document.querySelector("#newItemModal")
const closeButton = document.querySelector(".closeModal");
const cancelButton = document.querySelector(".cancelButton");
const createItem = document.querySelector(".createItem");
const itemTypeDropdown = document.querySelector("#itemTypeMenu");
const itemTypeButton = document.querySelector(".dropdownButton")

console.log(closeButton);
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

plusButton.addEventListener('click', e => {
    e.preventDefault();
    console.log("Click");
    newItemModal.classList.add("shown");
});

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