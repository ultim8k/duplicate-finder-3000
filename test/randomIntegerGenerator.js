const assert = require("assert");
const generate = require("../src/utils/randomIntegerGenerator");

describe("RandomIntegerGenerator", () => {
  describe("generate()", () => {
    it("should return an number", () => {
      const product = generate();

      assert.equal(isNaN(product), false);
    });

    it("should return an integer", () => {
      const product = generate();

      assert.equal(Number.isInteger(product), true);
    });

    it("should return an integer between MIN and MAX (inclusively)", () => {
      const min = 2;
      const max = 5;
      const product = generate(min, max);

      const isBetween = product >= min && product <= max;

      assert.equal(isBetween, true);
    });

    it("should return a random number", () => {
      const min = 0;
      const max = 512;
      const productA = generate(min, max);
      const productB = generate(min, max);
      const productC = generate(min, max);
      const productD = generate(min, max);

      const isRandom =
        productA !== productB || productB !== productC || productC !== productD;

      assert.equal(isRandom, true);
    });
  });
});
