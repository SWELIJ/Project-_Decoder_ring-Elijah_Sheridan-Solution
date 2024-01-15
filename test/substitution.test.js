const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Elijah", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is not provided", () => {
      const message = "message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "message";
      const alphabet = "notenoughletters";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet repeats any characters", () => {
      const message = "message";
      const alphabet = "aaaaaaabbbbbbbbbcccdddeeff";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "abcdefg";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "qwertyu";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "abcdefg";
      const alphabet = "!@#$%^&*()_+qwertyuiop{}as";
      const actual = substitution(message, alphabet);
      const expected = "!@#$%^&";

      expect(actual).to.equal(expected);
    });

    it("should keep spaces", () => {
      const message = "the best around";
      const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      const actual = substitution(message, alphabet);
      const expected = "ulc nciu mosydv";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "asdfgh";
      const alphabet = "asdfghjklzxcvbnmpoiuytrewq";
      const actual = substitution(message, alphabet, false);
      const expected = "abcdef";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "c}v|";
      const alphabet = "}|)#$%qwertyasdfghjklmnbvc";
      const actual = substitution(message, alphabet, false);
      const expected = "zayb";

      expect(actual).to.equal(expected);
    });

    it("should keep spaces", () => {
      const message = "abcdefg";
      const alphabet = "zyxwvutsrqponmlkjihgfedcba";
      const actual = substitution(message, alphabet, false);
      const expected = "zyxwvut";

      expect(actual).to.equal(expected);
    });
  });
});
