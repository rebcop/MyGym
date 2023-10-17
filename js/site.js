// get message from user input to check if it's palindrome
function getValues() {

    // get message input from the page
    let message = document.getElementById('message').value;

    // validate the input: make sure the input is not empty
    if ( message.length == 0 ) {
        swal.fire({
            icon: 'error',
            backdrop: false,
            text: 'Please enter a message to check.'
        })
    } else {

        // pass the message to checkForPalindrome and assign its return
        let palindromeMsg = checkForPalindrome(message);

        // give the palindrome message to display results to show on the page
        displayResults(palindromeMsg);
    }

}

// check the user input grabbed by getValues to see if it is a palindrome
function checkForPalindrome(message) {

    // Declare variables
    let msgClean = '';

    let msgCleanRev ='';

    let regex = /[A-Za-z0-9]/;

    let output = [];

    // Take out all the characters from the input from the user that are not a letter or number
    for (let i = 0; i < message.length; i++) {

        if (regex.test(message[i])) {

            msgClean += message[i].toLowerCase();

        }

    }

    // Reverse the clean message
    for (let i = msgClean.length - 1; i >= 0; i--) {

        msgCleanRev += msgClean[i];

    }
    
    // 
    if ( msgClean == '' ) {
        output.push('error');
        return output;

    } else if ( msgClean == msgCleanRev ) {
        output.push(true);
        output.push(msgCleanRev);
        return output;
    }
    
    else {
        output.push(false);
        output.push(msgCleanRev);
        output.push(msgClean.length*5 % 100 + 20);
        return output;
    }

}

// display result of checkForPalindrome back to user
function displayResults(message) {

    // Display success message if the input from user is a palindrome
    if (message[0] == true) {
        document.getElementById('results').textContent = 'A Palindrome! Take a breather.';
        document.getElementById('msg').textContent = `Your message reversed is: ${message[1]}`;
        document.getElementById('alert').classList.add('alert-success');
        document.getElementById('alert').classList.remove('alert-danger');
        document.getElementById('alert').classList.remove('alert-warning');

    // Display error message if the input from user does not have any letters or numbers to check
    } else if ( message[0] == 'error') {
        document.getElementById('results').textContent = 'Error!';
        document.getElementById('msg').textContent = `Please enter letters or numbers`;
        document.getElementById('alert').classList.add('alert-warning');
        document.getElementById('alert').classList.remove('alert-success');
        document.getElementById('alert').classList.remove('alert-danger');
    }
    
    // Display fail message if the input from user is not a palindrome
    else {
        document.getElementById('results').textContent = `Not a Palindrome! Drop and Give Me ${message[2]}!`;
        document.getElementById('msg').textContent = `Your message reversed is: ${message[1]}`;
        document.getElementById('alert').classList.remove('alert-success');
        document.getElementById('alert').classList.remove('alert-warning');
        document.getElementById('alert').classList.add('alert-danger');

    }

    // Make the results show on the page
    document.getElementById('alert').classList.remove('invisible');

}