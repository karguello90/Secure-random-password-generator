// Assignment Code
let generateBtn = document.querySelector("#generate");

//Arrays created below
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let specialCharacter = ["%", "&", ".", "*", "/", "<", ">", "!", "~", ".", ",", "?", "+", "@", "^", "_"];

//Variables declared below
let chooseLength = "";
let addLowerCase = "";
let addUpperCase = "";
let addSpecialCharacter = "";

function generatePassword() {
  let chooseLength = (prompt("Please choose a password length"));

  if(chooseLength < 8 || chooseLength > 128) {
    alert ("For security, please select a password length between 8-128 characters.");
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
