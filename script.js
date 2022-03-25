// This variable targets the generate button
var generateBtn = document.querySelector("#generate");

//Constant variable for the special characters, numberss,etc used for generating password.
const specialCharacterss = "!@#$%^&*()_-+={}[|\];:''<>,.?/";
const numberss = "1234567890";
const upperCaseLetters = "QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCaseLetters = "qwertyuioplkjhgfdaszmxncbv";
const lengthOfPassword= "";



function generatePassword() {
  userPassword = "";
  passwordCharacters = "";

//creating legth of pword pop up 
var lengthOfPassword = prompt("how many characters would you like (must be between 8-128)");

//if condition isnt met then alerts will pop up
if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
  password.length = lengthOfPassword;

// follow up pop ups with 
var specialCharacters = confirm("Click ok to confirm if you want special characters");

var numericalcharacters = confirm("Click ok to confirm if you want numbers");

var lowerCaseCharacter = confirm("Click ok to confirm if you want lowercase letters");

var upperCaseCharacter = confirm("Click ok to confirm if you want uppercase letters");

}
else { 
  alert("please select password between 8-128");
}

// selecting ok= true which will trigger e.g. lowercase be adding to password characters.
if (specialCharacters === true) {
  passwordCharacters += specialCharacterss
}
if (numericalcharacters === true) {
  passwordCharacters += numberss
}
if (lowerCaseCharacter === true) {
  passwordCharacters += lowerCaseLetters
}
if (upperCaseCharacter === true) {
  passwordCharacters += upperCaseLetters
}
else {
  alert("error-cannot create password");
}




return userPassword; 
}




 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//click generate button and it calls write password function
generateBtn.addEventListener("click", writePassword);
