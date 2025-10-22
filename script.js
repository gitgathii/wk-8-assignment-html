// JavaScript code for car content page
//variable and conditions
const boxes = document.querySelectorAll('.box');
const carInfo = document.getElementById('car-info');
const sizeBtn = document.getElementById('change-size-btn');
let isHighlighted = false;
//custom function
function toggleHighlight() {
    boxes.forEach(box => {
        box.classList.toggle('highlight', isHighlighted);
    });
    isHighlighted = !isHighlighted;
    isHighlighted = isHighlighted < 0 ? true : false;
}
//  Loops
boxes.forEach(box => {
    box.addEventListener('click', toggleHighlight);
});
// DOM Interactions
sizeBtn.addEventListener('click', function() {
    carInfo.classList.toggle('large');
});
