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

    const dateInput = document.getElementById('date-input');
    console.log(dateInput.value);

    if(dateInput.value == '') {
        alert('Date must be filled out');

    } else {
        //Write value to the page
    }

    const emailInput = document.getElementById('email-input');
    console.log(emailInput.value);

    if(emailInput.value == '') {
        alert('Email must be filled out');

    } else {
        //Write value to the page
    }

    const messageInput = document.getElementById('message-input');
    console.log(messageInput.value);

    if(messageInput.value == '') {
        alert('Message must be filled out');

    } else {
        //Write value to the page
    }
}