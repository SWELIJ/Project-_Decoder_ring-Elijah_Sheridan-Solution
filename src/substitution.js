// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let alphabetOG = "abcdefghijklmnopqrstuvwxyz";

  function hasDuplicateChars(str) {
    // returns true if a duplicate is found
    for (let i = 0; i < str.length; i++) {
      const char = str[i];

      for (let j = i + 1; j < str.length; j++) {
        if (char === str[j]) {
          return true; // Duplicate found
        }
      }
    }

    return false; // No duplicates found
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let output = "";
    if (!alphabet || alphabet.length !== 26 || hasDuplicateChars(alphabet)) {
      // if no alphabet is provided or alphabet is not exactly 26 chars, return false
      return false;
    } else {
      if (encode) {
        //encoding a message
        input = input.toLowerCase();

        for (let i = 0; i < input.length; i++) {
          //loop input string to be encoded
          if (input[i] === " ") {
            // no need to loop alphabet for spaces
            output += " ";
          }
          for (let j = 0; j < alphabetOG.length; j++) {
            //for each letter in the input, loop the alphabet for a match
            if (input[i] === alphabetOG[j]) {
              output += alphabet[j];
            }
          }
        }

        console.log("INPUT: " + input);
        console.log("ALPHABET: " + alphabet);
        console.log("alphabet: " + alphabetOG);
        console.log("OUTPUT: " + output);
      } else {
        //decoding a message

        input = input.toLowerCase();

        for (let i = 0; i < input.length; i++) {
          //loop input string to be encoded
          if (input[i] === " ") {
            // no need to loop alphabet for spaces
            output += " ";
          }
          for (let j = 0; j < alphabetOG.length; j++) {
            //for each letter in the input, loop the alphabet for a match
            if (input[i] === alphabet[j]) {
              output += alphabetOG[j];
            }
          }
        }

        console.log("INPUT: " + input);
        console.log("ALPHABET: " + alphabet);
        console.log("alphabet: " + alphabetOG);
        console.log("OUTPUT: " + output);
      }
      return output;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
