
// Assignment Code
let generateBtn = document.querySelector("#generate"); // Selects DOM button
let upperOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerOptions = "abcdefghijklmnopqrstuvwxyz";
let numericOptions = "0123456789";
let specialOptions = "`!@#$%^&*()-+=,./:;'<>?[\]_{|}~";
let optionChoices = [];
let generatedPass = "";

/* Function to ask for password criteria */
function generatePassword() {
    let passLength = prompt("Please enter a number between 8-128 for the number of characters in you password");
          if (passLength > 128){
              alert("Error: password must not exceed 128 characters");
              generatePassword();
              return;
          }
          if (passLength < 8){
              alert("Error: password must be at least 8 characters long");
              generatePassword();
              return;
          }

    // Confirm lowercase letters
    let passLower = confirm("Would you like lower case characters?");
          if (passLower == true){
              optionChoices.push(lowerOptions);
          }

    // Confirm uppercase letters
    let passUpper = confirm("Would you like upper case characters?");
          if (passUpper == true) {
            optionChoices.push(upperOptions);
          }

    // Confirm numerals
    let passNumeric = confirm("Do you want numbers to be included?");
          if (passNumeric == true) {
            optionChoices.push(numericOptions);
          }

    // Confirm special characters
    let passSpecial = confirm("Do you want special characters included?");
          if (passSpecial == true){
            optionChoices.push(specialOptions);
          }
    // For Loop that generates the characters of the requested password
    for (let i = 0; i < passLength; i++){
          let optionsArray = optionChoices[Math.floor(Math.random() * optionChoices.length)];
          let passSelection = optionsArray.charAt(Math.floor(Math.random() * optionsArray.length));
          generatedPass += passSelection;
    }
}

/* Function that invokes password generator */
function writePassword(){
  generatePassword();
  var passwordTextArea = document.querySelector("#password");
  passwordTextArea.textContent = generatedPass;
}

/* User needs to click this button to genreate password and initate all functions */
generateBtn.addEventListener("click", writePassword);
