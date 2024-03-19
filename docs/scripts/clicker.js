var counterElement = document.querySelector('#counter');
var buttonElement = document.querySelector('#button');

var counter = 0;

buttonElement.addEventListener("click", increase);

function increase() {
    counter++;
    counterElement.textContent = "Clicks: " + counter;
    console.log(counter);
}