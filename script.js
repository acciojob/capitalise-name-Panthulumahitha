//your JS code here. If required.
// Select the input field by its id 'fname'
const inputField = document.getElementById('fname');

// Add an event listener for the 'blur' event
inputField.addEventListener('blur', function () {
    // Convert the value of the input field to uppercase
    this.value = this.value.toUpperCase();
});

