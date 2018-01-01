// while loop, arrays, objects (potentially)

// first half of lesson teach array; review var, while loop, functions

// Does anyone remember how we make a variable? 
//   A. using let or const
//      - remember that we can name variables however we want

// does anyone remember the different data types?
//   A. Numbers, Strings, Booleans
let myAge = 5;
let instrument = "piano";
let hasBrushedTeeth = true; // hopefully

// now there's a special data type called an array, and it's basically a list of something
// In fact, a string is just a list of individual letters, which is why I can access a letter in it like this
console.log(instrument[2]); 

// or I could do 

console.log(instrument[0]); 

// so computers actually start counting from 0, so the first element in this list of characters is at the zeroth spot

// while loops
// a while loop loops until it reaches a certain condition
let myNumber = 0;
while (myNumber < 10) { 
    myNumber = myNumber + 1; // or myNumber += 1 or myNumber++ (all the same)
}

// let them make their own loop that counts to 65

// lastly, we'll review functions
// functions are basically reusable sets of code.
// You write code, give it a name, and then any time you call the name, it runs that code again
let add5 = function(anyNumber) {
    console.log(anyNumber + 5); // alternively create a variable set equal to anyNumber + 5 and then console.log it
}

// let's write another function that multiplies by 7. 
// (Get them to name it, write out the function, arguments, and line of code)
let multiplyBy7 = function(anotherRandomNumber) {
    console.log(anotherRandomNumber * 7);
}


// second half build encryption algorithm

// let's keep this variable between 2 and 10
const SECRET_NUMBER = 5; 

let encrypt = function(originalMessage) {
    let index = 0;

    while (letterNumber < originalMessage.length) {
        let letter = originalMessage[index];
        let charCode = letter.charCodeAt();

        charCode *= SECRET_NUMBER;

        let newLetter = String.fromCharCode(charCode);

        letterNumber += 1;
    }
}


// <---------OTHER--PERSON'S--COMPUTER----------> \\

// perhaps we should get some paper and then everyone will write down 
// their encrypted messages and pass it to the person next to them

// go through this process on the whiteboard or the TV
// 1. Since we multiplied every letter in the original message by a certain number
//    we know that every letter will also be divisible by that number
// 2. Therefore, we need to check and see if all the letters are divisible by every number between 2 and 10
// 3. So in implentation how would this look? Well, we'll need make a loop from 2 to 10.
//    Then we'll loop through every letter. If all of the letters are divisible by the number we're currently at,
//    then we'll print it out to see if it makes sense.

// students will have to make a decrypt function (CURRENTLY TOO COMPLICATED)
let decrypt = function(encryptedMessage) {

    // so the first thing you'll probably want to do is look at the encrypted message
    console.log(encryptedMessage);

    // since we only allowed 2-10, we're going to check all combinations (efficient, right?)
    let number = 2;
    while (number <= 10) {

        let index = 0;
        let allLettersDivisible = true; // we'll assume this for now and set to false if we come across any other evidence

        // loop through the whole message
        while (index < encryptedMessage.length) {

            if (encryptedMessage.charCodeAt() % number != 0) {
                allLettersDivisible = false;
            }

            index += 1;
        }

        if (allLettersDivisible) {
            console.log(number);
        }

        number += 1;
    }

}