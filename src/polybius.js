// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function isEven(number) {
    return number % 2 === 0;
  }

  function splitPairs(input) {
    const coordinates = [];
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        coordinates.push(" ");
        i++;
      }
      coordinates.push(input.slice(i, i + 2));
    }
    return coordinates;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const pSquare = [];
  let abcIndex = 0;

  for (let i = 0; i < 5; i++) {
    // creates alphabet square
    pSquare.push([]); //creates row

    for (let j = 0; j < 5; j++) {
      //then add 5 letters to that array.. then exit loop
      if (abcIndex === 8) {
        pSquare[i][j] = "i/j";
        abcIndex++;
        continue;
      } else if (abcIndex === 9) {
        pSquare[i][j] = "k";
        abcIndex += 2;
        continue;
      } else {
        pSquare[i][j] = alphabet[abcIndex];
        abcIndex++;
      }
    }
  }

  // console.log(pSquare[3][4]) //down 3, right 4 === u
  function polybius(input, encode = true) {
    // your solution code here

    let output = "";
    console.log("INPUT: " + input);
    //console.log(pSquare) // shows square as a whole

    if (encode) {
      //if input is bein encoded
      input = input.toLowerCase();
      for (let h = 0; h < input.length; h++) {
        // loop input string

        if (input[h] === "i" || input[h] === "j") {
          // i and j add 42 to output
          //console.log("LETTER: " + input[h]) //shows current letter
          //console.log("Coordinate: 42 ")
          output += "42";
        } else if (input[h] === " ") {
          // spaces are ignored and added to input
          output += " ";
        }
        for (let i = 0; i < pSquare.length; i++) {
          //loop square

          for (let j = 0; j < pSquare[i].length; j++) {
            //loop current row of square

            if (input[h] === pSquare[i][j]) {
              output += j + 1 + "" + (i + 1);
              // console.log("LETTER: " + input[h]) //shows current letter
              //   //console.log(pSquare)
              //   console.log("Match found for: "+ input[h])
              //console.log("Coordinate: "+ (j+1) + "" + (i+1) )
              //  // console.log("COORDINATE: " + ()+ "" + ())
            }
          }
        }
      }
      console.log(`OUTPUT: ${output}`);
      return output;
    } else {
      const noSpaceInput = input.replace(" ", "");
      const evenLength = isEven(noSpaceInput.length); //checks that there are an even amount of numbers to translate
      //console.log("evenLength value : " + evenLength)
      if (evenLength) {
        const coordinates = splitPairs(input);
        //console.log(`Coordinate array: ${coordinates}`)
        console.log(pSquare);
        for (let i = 0; i < coordinates.length; i++) {
          if (coordinates[i] === " ") {
            output += coordinates[i];
          } else {
            const digitsArray = coordinates[i].split("").map(Number);
            //console.log(`letter at: ${digitsArray[1]} , ${digitsArray[0]} is ${pSquare[digitsArray[1]-1][digitsArray[0]-1]}`)
            output += pSquare[digitsArray[1] - 1][digitsArray[0] - 1];
          }
        }

        console.log(`OUTPUT: ${output}`);
        return output;
      }
      //OBJ: get number pairs, convert them to letters, negate spaces
      else {
        return false;
      }
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
