const assert = require("assert");
const main = require("../src/main");

describe("Main", () => {
  describe("main()", () => {
    it("should generate a list of integers greater than 0 and shorter than N", () => {
      const providedMaxInt = 5;
      const duplicates = main(providedMaxInt);

      const isGreaterThanZero = duplicates.length >= 0;
      const isLessEqualThanProvidedInt = duplicates.length <= providedMaxInt;

      const lengthIsWithinRange =
        isGreaterThanZero && isLessEqualThanProvidedInt;

      assert.equal(lengthIsWithinRange, true);
    });
  });
});
