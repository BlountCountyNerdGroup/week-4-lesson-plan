// review functions:

// functions are basically reusable sets of code.
// You write code, give it a name, and then any time you call the name, it runs that code again
function add5(anyNumber) {
    console.log(anyNumber + 5); // alternively create a variable set equal to anyNumber + 5 and then console.log it
}

// let's write another function that multiplies by 7. 
// (Get them to name it, write out the function, arguments, and line of code)
function multiplyBy7(anotherRandomNumber) {
    console.log(anotherRandomNumber * 7);
}

// teach how to access certain letters in a string:

var instrument = "piano";

console.log(instrument[2]); 

// or I could do 

console.log(instrument[0]); 

// so computers actually start counting from 0, so the first element in this list of characters is at the zeroth spot

// at this point, get them to make a function that takes a string and prints the last character of it
// (I'll have to teach .length, but make them say what we need before I give it to them)

// teach while loops:
// a while loop loops until it reaches a certain condition
var myNumber = 0;
while (myNumber < 10) { 
    myNumber = myNumber + 1; // or myNumber += 1 or myNumber++ (all the same)
}

// let them make their own loop that counts down from some arbitrary number to 0

// get them to edit their previous function to print out the string backwards 
// (make a while loop that counts down from whateverStringName.length to 0 and console.log out the string at that index)

// second half build encryption algorithm

// let's keep this variable between 2 and 10
var secretNumber = 5; 

function encrypt() {
    var letterNumber = 0;
    var encryptedMessage = "";
    var originalMessage = document.getElementById('encrypt').value;

    // we'll be looping through every letter in originalMessage
    while (letterNumber < originalMessage.length) {
        var letter = originalMessage[letterNumber];

        // every letter has a number associated with it. The way we get this number is by doing 
        // myLetter.charCodeAt(); and we can store it in a variable like this:
        var charCode = letter.charCodeAt();

        // now we take that number and multiply it by the number we originally chose to be the secret number
        charCode *= secretNumber;

        // we do String.fromCharCode(putANumberHere); to get the letter that corresponds to the charCode
        var newLetter = String.fromCharCode(charCode);

        encryptedMessage += newLetter;

        // now we increment our loop variable and start the loop again with letterNumber being 1 higher
        letterNumber += 1;
    }

    console.log(encryptedMessage);
    document.getElementById('decrypt').innerHTML = encryptedMessage;
}