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

    let msgClean = '';

    let msgCleanRev ='';

    let regex = /[A-Za-z0-9]/;

    let output = [];

    for (let i = 0; i < message.length; i++) {

        if (regex.test(message[i])) {

            msgClean += message[i].toLowerCase();

        }

    }

    for (let i = msgClean.length - 1; i >= 0; i--) {

        msgCleanRev += msgClean[i];

    }
    
    if ( msgClean != '' && msgClean == msgCleanRev ) {

        output.push(true);
        output.push(msgCleanRev);


    } else {
        output.push(false);
        output.push(msgClean);
        output.push(msgClean.length*5 % 100 + 20);
    }

    return output;

}

// display result of checkForPalindrome back to user
function displayResults(message) {

    if (message[0]) {
        document.getElementById('results').textContent = 'A Palindrome! Take a breather.';
        document.getElementById('msg').textContent = `Your message reversed is: ${message[1]}`;
        document.getElementById('alert').classList.add('alert-success');
        document.getElementById('alert').classList.remove('alert-danger');

    } else {
        document.getElementById('results').textContent = `Not a Palindrome! Drop and Give Me ${message[2]}!`;
        document.getElementById('msg').textContent = `Your message reversed is: ${message[1]}`;
        document.getElementById('alert').classList.remove('alert-success');
        document.getElementById('alert').classList.add('alert-danger');

    }

    document.getElementById('alert').classList.remove('invisible');

}