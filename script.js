// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //YOUR CODE HERE
    var lowercaseCharacters = ['a','a','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numericCharacters  = ['0','1','2', '3', '4','5','6','7','8','9'];
    var specialCharacters = ['!','@','#','$','%','^','&','*','+','='];  
    var chosenChar = []
    var charLength = prompt('How many characters would you like to your password to contain?');
    var promptSpecial = confirm('Would you to add special characters to you password?');
    var promptNumber = confirm('Would you to add numbers to your password?');
    var promptLower = confirm('Would you like to add lowercase characters to your password?');
    var promptUpper = confirm('Would you like to add uppercase characters to your password?');
    if (promptSpecial === true){
      chosenChar = chosenChar.concat(specialCharacters);
    } if (promptLower === true){
    chosenChar = chosenChar.concat(lowercaseCharacters);
    }
    if (promptNumber === true){
      chosenChar = chosenChar.concat (numericCharacters);
    }
    if (promptUpper === true){
      chosenChar = chosenChar.concat (uppercaseCharacters);
    }
    if (!promptSpecial && !promptLower && !promptNumber && !promptUpper){
      alert('please choose at least one valid character type.');
      return '';
    }


    var chosenPass = ''
    for (var i = 0; i < charLength; i++){

      var randomNumber = Math.floor(Math.random()*chosenChar.length);
      var randomChar = chosenChar [randomNumber];
      chosenPass += randomChar;
    }
    return chosenPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
