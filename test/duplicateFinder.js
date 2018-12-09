const assert = require("assert");
const findDuplicate = require("../src/utils/duplicateFinder");

describe("DuplicateFinder", () => {
  describe("findDuplicate()", () => {
    it("should return an empty list when empty list provided", () => {
      const list = [];
      const duplicates = findDuplicate(list);

      assert.equal(duplicates.length, 0);
    });

    it("should return a new list with the duplicate values found in the list provided", () => {
      const list = [1, 1, 3];
      const duplicates = findDuplicate(list);

      assert.deepEqual(duplicates, [1]);
    });
  });
});
