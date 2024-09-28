// script.js
console.log("Bienvenidos a la página web sencilla.");

var modals = document.querySelectorAll('.modal');
var closeModalButtons = document.querySelectorAll('.close');

closeModalButtons.forEach(function(button) {
    button.onclick = function() {
        this.parentElement.style.display = "none";
    };
});

modals.forEach(function(modal) {
    modal.onclick = function() {
        this.style.display = "none";
    };
});

