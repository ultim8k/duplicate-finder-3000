const assert = require("assert");
const createList = require("../src/utils/lists");

describe("Lists", () => {
  describe("createList()", () => {
    it("should return a list of N items when N integer is passed as parameter", () => {
      const list = createList(1);
      const anotherList = createList(5);

      assert.equal(list.length, 1);
      assert.equal(anotherList.length, 5);
    });

    it("should return a list of 1 item if 1 is passed as parameter", () => {
      const list = createList(1);

      assert.equal(list.length, 1);
    });

    it("should return a list of 0 items if no parameters passed", () => {
      const list = createList();

      assert.equal(list.length, 0);
    });
  });
});
