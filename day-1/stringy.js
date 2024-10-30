// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: function takes in a string
O: function returns the length of string as a number
C: n/a
E: n/a
*/


function length(string) {
    // YOUR CODE BELOW HERE //
   // return input string's length property
   return string.length; 
}
// YOUR CODE ABOVE HERE //

/*
I: function takes in a string
O: function returns a new string in lowercase
C: n/a
E: n/a
*/

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/*
I: function takes in a string
O: function returns a new string in uppercase
C: n/a
E: n/a
*/

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I: function takes in a string
O: function returns a new string in lower case with spaces replaced by dashes
C: n/a
E: n/a
*/
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //enforce lower case
    return string.toLowerCase();
    //split string at spaces, join string with dashes
    return string.split(' ').join('-');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: function takes in two strings (string, single character)
O: function returns a boolean value of true if the string starts with the given character
C: the function is case insensitve
E: n/a
*/

function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //convert string and character to lowercase
    var lowerString = string.toLowerCase();
    var lowerChar = char.toLowerCase();
    //check if first chracter of the string matches the character
    return lowerString[0] === lowerchar;
}
    // YOUR CODE ABOVE HERE //

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: function takes in two strings (string, single character)
O: function returns a boolean value of true if the string ends with the given character
C: the function is case insensitve
E: n/a
*/

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    //convert string and single character to lower case
    var lowerString = string.toLowerCase();
    var lowerChar = char.toLowerCase();
    //check if string ends with the character, return boolean value of true if it does
    return lowerString[lowerString.length - 1] === lowerChar;
}
    // YOUR CODE ABOVE HERE //


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
/*
I: function takes in two strings 
O: function returns the strings concatenated into one
C: n/a
E: n/a
*/
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //concatenate the two strings
    return stringOne + stringTwo;
}

    // YOUR CODE ABOVE HERE //


/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: function takes in any number of strings in an array
O: function returns strings concatenated into one called "args"
C: n/a
E: n/a
*/

function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //join any number of strings in an array together
    return args.join(' ');
}
    // YOUR CODE ABOVE HERE //


/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
