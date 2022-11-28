// Assignment Code
let generateBtn = document.querySelector("#generate");

//Arrays created below
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharacter = ["%", "&", ".", "*", "/", "<", ">", "!", "~", ".", ",", "?", "+", "@", "^", "_"];

//Variables declared below
let chooseLength = "";
let addNumber = "";
let addLowerCase = "";
let addUpperCase = "";
let addSpecialCharacter = "";

//User will select the password length and all other criteria
function generatePassword() {
  let chooseLength = (prompt("Please choose a password length"));
//Use of isNan and if statement to avoid use of letters, special characters, and too short or long of a length
  if (isNaN(chooseLength) || chooseLength < 8 || chooseLength > 128) {
    alert ("For security, please select a password length between 8-128 characters.");
    generatePassword();
  }
  //User will select the criteria of the password
  let addNumber = confirm ("Would you like to add numbers?");
  let addLowerCase = confirm("Would you like to add lower case letters?");
  let addUpperCase = confirm("Would you like to add upper case letters?");
  let addSpecialCharacter = confirm("Would you like to add special characters?");
  //If none of the criteria is selected, questions restart
  if (addLowerCase === false && addUpperCase === false && addSpecialCharacter === false && addNumber === false) {
    alert ("For security, at least one criteria option must be selected.");
    let addNumber = confirm ("Would you like to add numbers?");
    let addLowerCase = confirm("Would you like to add lower case letters?");
    let addUpperCase = confirm("Would you like to add upper case letters?");
    let addSpecialCharacter = confirm("Would you like to add special characters?");
  }

//If statements to gather answers to criteria questions
  let criteriaSelection = []
if (addNumber) {
  criteriaSelection = criteriaSelection.concat(numbers)
}
if (addLowerCase) {
  criteriaSelection = criteriaSelection.concat(lowerCase)
}
if (addUpperCase); {
  criteriaSelection = criteriaSelection.concat(upperCase)
}
if (addSpecialCharacter) {
  criteriaSelection = criteriaSelection.concat(specialCharacter)
}

//Need to fix console log issue, not generating
console.log(criteriaSelection)

let completedPass = ""
//Use of Math.floor to generate a random password
for (var i = 0; i < chooseLength; i++) {
  completedPass = completedPass + criteriaSelection[Math.floor(Math.random() * criteriaSelection.length)];
}
//Random password is shown to user
return completedPass;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);