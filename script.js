// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var allSpecial = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ";", "'", "<", ",", ">", ".", "?", "\\", "\""]


function generatePassword() {
    // Radomly generate the password here
    var allChoices = [];
    var newPassword = "";

    // Ask what is the length of your password?
    var passwordLength = parseInt(prompt("What is your password's length (Must be between 8 and 128 characters?"))

    if (passwordLength >= 8 && passwordLength <= 128) {
        // Uppercase?
        var useUpper = confirm("Do you want uppercase characters?");

        if (useUpper === true) {
            allChoices = allChoices.concat(allUpper);
        }

        // Lowercase?
        var useLower = confirm("Do you want lowercase characters?");

        if (useLower === true) {
            allChoices = allChoices.concat(allLower);
        }

        // Numbers?
        var useNumbers = confirm("Do you want numbers characters?");

        if (useNumbers === true) {
            allChoices = allChoices.concat(allNumbers);
        }

        // Special?
        var useSpecial = confirm("Do you want special characters?");

        if (useSpecial === true) {
            allChoices = allChoices.concat(allSpecial);
        }

        if (!useNumbers && !useSpecial && !useLower && !useUpper) {
            alert("Error! You must confirm at least one character type");
            return;
        }
        else { console.log("I got here.");
            // Randomly generate the password here
            for (var i = 1; i <= passwordLength; i++) {
                console.log(allChoices);
                var randomIndex = Math.floor(Math.random() * allChoices.length);
                console.log(randomIndex);
                newPassword += allChoices[randomIndex]
                console.log(newPassword);
            }

            return newPassword;
        }
    } else {
        alert("Error! Length must be between 8 and 128 characters");
        return;


    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
