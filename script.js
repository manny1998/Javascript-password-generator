// This variable targets the generate button
var generateBtn = document.querySelector("#generate");


function generatePassword() {

//creating pop ups with password requirements
var lengthOfPassword = prompt("how many characters would you like (must be between 8-128)");

var specialCharacters = confirm("Click ok to confirm if you want special characters");

var numericalcharacters = confirm("Click ok to confirm if you want numbers")

var lowerCaseCharacter = confirm("Click ok to confirm if you want lowercase letters")

var upperCaseCharacter = confirm("Click ok to confirm if you want uppercase letters")



  return("generate password");
}

//


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//click generate button and it calls write password function
generateBtn.addEventListener("click", writePassword);
