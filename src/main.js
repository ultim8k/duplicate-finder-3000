const createList = require("./utils/lists");
const generate = require("./utils/randomIntegerGenerator");
const findDuplicate = require("./utils/duplicateFinder");

const main = (maxNumber = 10) => {
  const minNumber = 1;
  const listSize = maxNumber + 1;

  const emptyList = createList(listSize);
  const generateOneToMax = () => generate(minNumber, maxNumber);
  const integersList = emptyList.map(generateOneToMax);

  return findDuplicate(integersList);
};

module.exports = main;
