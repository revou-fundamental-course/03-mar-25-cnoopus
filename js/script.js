//ini file javascript
console. log("Javascript is working!");

function validateForm() {
    // Get value from input
    const nameInput = document.getElementById('name-input');
    console.log(nameInput.value);

    if(nameInput.value == '') {
        alert('Name must be filled out');

    } else {
        //Write value to the page
    }

    const birthdateInput = document.getElementById('birthdate-input');
    console.log(birthdateInput.value);

    if(birthdateInput.value == '') {
        alert('Date must be choosed');

    } else {
        //Write value to the page
    }

}