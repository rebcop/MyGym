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

    // let regex = /[^A-Za-z0-9]/;
    // msgClean = message.replace(regex,'').toLowerCase();

    // Take out all the characters from the input from the user that are not a letter or number
    // Could have used replace method instead commented out above
    for (let i = 0; i < message.length; i++) {

        if (regex.test(message[i])) {

            msgClean += message[i].toLowerCase();
        }
    }

    // Reverse the clean message
    for (let i = msgClean.length - 1; i >= 0; i--) {
        msgCleanRev += msgClean[i];
    }
    
    // If there is nothing in the clean message return error
    if ( msgClean == '' ) {
        output.push('error');
        return output;
    
    // If the reverse of the clean message is equal to the clean message it's a palindrome!
    } else if ( msgClean == msgCleanRev ) {
        output.push(true);
        output.push(msgCleanRev);
        return output;
    }
    
    // If it's anything else, it's not a palindrome
    else {
        output.push(false);
        output.push(msgCleanRev);
        output.push(msgClean.length*5 % 100 + 20);
        return output;
    }

    // Use objects to return multiple values instead of arrays so you can access them by name
    // let reversed = reverseMessage(cleanInput);
    // let isPalindrome = reversed == cleanInput;

    // let output = {
    //     revMsg: '', // Reversed clean input from user
    //     isPalindrome: isPalindrome // true or false or error
    // }
}

// display result of checkForPalindrome back to user
function displayResults(message) {

    // Remove classes
    document.getElementById('alert').classList.remove('invisible', 'alert-danger', 'alert-warning', 'alert-success');

    // Display success message if the input from user is a palindrome
    if (message[0] == true) {
        document.getElementById('results').textContent = 'A Palindrome! Take a breather.';
        document.getElementById('msg').textContent = `Your message reversed is: ${message[1]}`;
        document.getElementById('alert').classList.add('alert-success');

    // Display error message if the input from user does not have any letters or numbers to check
    } else if ( message[0] == 'error') {
        document.getElementById('results').textContent = 'Error!';
        document.getElementById('msg').textContent = `Please enter letters or numbers`;
        document.getElementById('alert').classList.add('alert-warning');
    }
    
    // Display fail message if the input from user is not a palindrome
    else {
        document.getElementById('results').textContent = `Not a Palindrome! Drop and Give Me ${message[2]}!`;
        document.getElementById('msg').textContent = `Your message reversed is: ${message[1]}`;
        document.getElementById('alert').classList.add('alert-danger');
    }
}