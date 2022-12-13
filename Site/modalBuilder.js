//This file is to build modals by.
var additionalItems;
const modalHeader = `
    <div class="modal-header">
        <h5 class="modal-title" id="newItemModalLable">Add New Item</h5>
        <button type="button" class="btn-close closeModal" data-bs-dismiss="modal"
            aria-label="Close"></button>
    </div>
`

const modalFooter = `
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary cancelButton"
            data-bs-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary createItem">Create Item</button>
    </div>
`;

var template = 
`
    ${modalHeader}
    <div class="modal-body">
        <div class="input-group mb-3">
            <input type="text" class="form-control" aria-label="Text input with dropdown button"
                placeholder="Item Name">
            <button class="btn btn-outline-secondary dropdown-toggle dropdownButton" type="button"
                placeholder="Name">Item type</button>
            <ul class="dropdown-menu dropdown-menu-end" id="itemTypeMenu">
            </ul>
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Leave a comment here"
                id="floatingTextarea2"></textarea>
            <label for="floatingTextarea">Description</label>
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control"
                aria-label="Dollar amount (with dot and two decimal places)" placeholder="Price">
        </div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Purchase Date">
        </div>
        ${additionalItems}
    </div>

    ${modalFooter}
`;
//I need to make the aditional items append itself with an array. Eventually we can expand it to have specific data types like currenty, address, etc.
//I think I want to pass through a 2d array for data type and content (color, blue).
function generateItems(customDataArray) {
    
}