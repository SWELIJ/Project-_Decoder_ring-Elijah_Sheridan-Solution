const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Elijah", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "Hello, World!";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "just in thailand";
      const actual = polybius(message);
      const expected = "42543444 4233 4432114213113341";

      expect(actual).to.equal(expected);
    });

    it("should ignore spaces", () => {
      const message = "I love you";
      const actual = polybius(message);
      const expected = "42 13431551 454354";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to i/j", () => {
      const message = "424242";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should ignore spaces", () => {
      const message = "42543444 4111333151";

      const actual = polybius(message, false);
      const expected = "i/just dance";

      expect(actual).to.equal(expected);
    });

    it("should return false if length of numbers is odd (ignoring spaces)", () => {
      const message = "42 235134341";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
