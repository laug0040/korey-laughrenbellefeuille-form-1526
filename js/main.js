// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateContactForm(event) {
    event.preventDefault();
    
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    const data = {};
    const errors = [];

    const fullnameElement = document.getElementById('fullname');
    const emailElement = document.getElementById('email');
    const messageElement = document.getElementById('message');

    const fullnameValue = fullnameElement.value.trim();
    const emailValue = emailElement.value.trim();
    const messageValue = messageElement.value.trim();

    // +-----------+    
    // | FULL NAME |
    // +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    if (fullnameValue !== '') {
        data.fullname = fullnameValue;
    } else {
        errors.push('Full name is missing');
    }

    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    if (emailValue !== '') {
        if (emailRegex.test(emailValue)) {
            data.email = emailValue;
        } else {
            errors.push('Please enter a valid email address'); // Finishing this after my wisdom teeth removal was not a good idea
        }
    } else {
        errors.push('Email is missing');
    }

    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
    if (messageValue !== '') {
        data.message = messageValue;
    } else {
        errors.push('Message is missing');
    }

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if (errors.length > 0) {
        console.error('Form errors:', errors);
    } else {
        console.log('Form data:', data);
        fullnameElement.value = '';
        emailElement.value = '';
        messageElement.value = '';
    }
}

// Close your function here
    
// Register your form to "click" event.
const submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', validateContactForm);
}