// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    let result = "";

    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      // if shift is 0, nonexistent, above 25 or below -25 return false
      return false;
    } else if (encode) {
      for (let i = 0; i < input.length; i++) {
        //need to handle edge cases within this block
        let unicode = input.charCodeAt(i);
        if (unicode < 97 || unicode > 122) {
          result += String.fromCharCode(unicode);
        } else if (unicode + shift < 97) {
          //if the sum goes before unicode "a", wrap by adding 25
          result += String.fromCharCode(unicode + shift + 26);
        } else if (unicode + shift > 122) {
          // if the shift sum goes after "z", wrap by subtracting 25
          result += String.fromCharCode(unicode + shift - 26);
        } else if (unicode + shift === 97 || unicode + shift === 122) {
          result += String.fromCharCode(unicode + shift);
        } else {
          result += String.fromCharCode(unicode + shift);
        }
      }
      console.log("INPUT: " + input);
      console.log("OUTPUT: " + result);
    } else if (!encode) {
      for (let i = 0; i < input.length; i++) {
        //need to handle edge cases within this block
        let unicode = input.charCodeAt(i);
        if (unicode < 97 || unicode > 122) {
          result += String.fromCharCode(unicode);
        } else if (unicode - shift < 97) {
          //if the sum goes before unicode "a", wrap by adding 26
          result += String.fromCharCode(unicode - shift + 26);
        } else if (unicode - shift > 122) {
          // if the shift sum goes after "z", wrap by subtracting 26
          result += String.fromCharCode(unicode - shift - 26);
        } else if (unicode - shift === 97 || unicode - shift === 122) {
          result += String.fromCharCode(unicode - shift);
        } else {
          result += String.fromCharCode(unicode - shift);
        }
      }
      console.log("INPUT: " + input);
      console.log("OUTPUT: " + result);
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
