// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() Tests Written By Elijah Sheridan", () => {
  it("Should return false if shift amount is 0", () => {
    const message = "secretCode";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });

  it("Should return false if no shift is given", () => {
    const message = "secretCode";
    const actual = caesar(message);

    expect(actual).to.be.false;
  });

  it("Should return false if shift is less than -25", () => {
    const message = "secretCode";
    const actual = caesar(message, -27);
    expect(actual).to.be.false;
  });

  it("Should return false if shift is more than 25", () => {
    const message = "secretCode";
    const actual = caesar(message, 27);
    expect(actual).to.be.false;
  });

  it("Should ignore letter case", () => {
    const message = "CAPITALIZED";
    const actual = caesar(message, 7);
    const expected = "jhwpahspglk";
    expect(actual).to.equal(expected);
  });

  it("Should ignore spaces and special characters", () => {
    const message = "@)!$&  *abc";
    const actual = caesar(message, 1);
    const expected = "@)!$&  *bcd";
    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const message = "igxxuzy";
    const shift = 6;
    const actual = caesar(message, shift, false);
    const expected = "carrots";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const message = "wqmpi :-)";
    const shift = 4;
    const actual = caesar(message, shift, false);
    const expected = "smile :-)";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const message = "GHCD";
    const shift = 14;
    const actual = caesar(message, shift, false);
    const expected = "stop";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const message = "Lziowv Jitt H";
    const shift = 8;
    const actual = caesar(message, shift, false);
    const expected = "dragon ball z";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const message = "OJ OCZ GZAO";
    const shift = -5;
    const actual = caesar(message, shift, false);
    const expected = "to the left";

    expect(actual).to.equal(expected);
  });
});
