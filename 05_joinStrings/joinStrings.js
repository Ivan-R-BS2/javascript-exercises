/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

const firstName= "Carlos" ;
const lastName = "Stevenson";
const thisYear = 1965;
const birthYear =1947 ;
const fullName = firstName+" "+lastName
const age = thisYear-birthYear;
const greeting= "Hello! My name is "+fullName+" and I am "+age+ " years old."; 

// 1. Create 4 variables: `firstName`, `lastName`, `thisYear`, and `birthYear`

// 2. Create a 5th variable, `greeting`, that is constructed from the previous 4 variables
// - It should contain a greeting that includes the person's full name and age

// Note: To make the tests pass, you will need to use exact values and wording (as you will see described in `joinStrings.js`). 
// If the tests fail, look at the feedback in your terminal then check your spacing, capitalization, and punctuation.


// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
