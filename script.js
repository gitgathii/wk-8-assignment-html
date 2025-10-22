// Global variable to track highlight state
let isHighlighted = false;

// Function to toggle highlight animation on cards
// Parameters: elements (array of DOM elements), toggleState (boolean)
// Returns: Updated toggleState
function toggleHighlight(elements, toggleState) {
    elements.forEach(element => {
        element.classList.toggle('highlight', toggleState);
    });
    return !toggleState;
}

// Function to toggle table size
// Parameters: element (DOM element), className (string)
// Returns: None
function toggleElementClass(element, className) {
    element.classList.toggle(className);
}

// Function to show/hide modal
// Parameters: modal (DOM element), isVisible (boolean)
// Returns: None
function toggleModal(modal, isVisible) {
    modal.classList.toggle('show', isVisible);
}

// Function to validate form inputs
// Parameters: formData (object with name, email, message)
// Returns: Object with isValid (boolean) and message (string)
function validateForm({ name, email, message }) {
    if (name.length < 3 || name.length > 20) {
        return { isValid: false, message: 'Name must be between 3 and 20 characters' };
    }
    if (!email.includes('@') || !email.includes('.')) {
        return { isValid: false, message: 'Invalid email format' };
    }
    if (message.length === 0) {
        return { isValid: false, message: 'Message cannot be empty' };
    }
    return { isValid: true, message: 'Form is valid' };
}

// DOM elements
const boxes = document.querySelectorAll('.box');
const carInfo = document.querySelector('.car-info table');
const sizeBtn = document.getElementById('change-size-btn');
const modalBtn = document.getElementById('toggle-modal-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const submitForm = document.getElementById('submit-form');

// Event Listeners
boxes.forEach(box => {
    box.addEventListener('click', () => {
        isHighlighted = toggleHighlight(boxes, isHighlighted);
    });
});

sizeBtn.addEventListener('click', () => {
    toggleElementClass(carInfo, 'large');
});

modalBtn.addEventListener('click', () => {
    toggleModal(modal, true);
});

closeModal.addEventListener('click', () => {
    toggleModal(modal, false);
});

submitForm.addEventListener('click', () => {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    const validation = validateForm(formData);
    alert(validation.message);
    if (validation.isValid) {
        toggleModal(modal, false);
        document.querySelector('form').reset();
    }
});