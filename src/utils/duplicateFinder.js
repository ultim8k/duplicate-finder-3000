/**
 * A naive and slow aproach written to initially validate the unit tests
 */
const findDuplicateSlow = (list = []) => {
  const duplicates = [];

  list.forEach((val, index, ar) => {
    ar.forEach((innerVal, innerIndex) => {
      if (val === innerVal && index !== innerIndex) {
        const matches = duplicates.filter(duplicate => duplicate === innerVal);

        if (!matches.length) {
          duplicates.push(innerVal);
        }
      }
    });
  });
};

/**
 * A more "pure" aproach, which avoids any mutations.
 * Unfortunatelly it's slower than the chosen solution.
 */
const findDuplicatePure = (list = []) =>
  Object.keys(
    list.reduce(
      (acc, key) => ({
        ...acc,
        [key]: Number(acc[key] || 0) + 1
      }),
      {}
    )
  ).filter((key, i, keys) => keys[key] > 1);

/**
 * The fastest solution.
 * It generates a dictionary containing
 * all the random numbers as keys
 * and the number of occurrences as values
 */
const findDuplicateFast = (list = []) => {
  const valuesAsKeys = {};

  list.forEach(item => {
    valuesAsKeys[item] = Number(valuesAsKeys[item] || 0) + 1;
  });

  const duplicates = Object.keys(valuesAsKeys).filter(
    key => valuesAsKeys[key] > 1
  );

  return duplicates;
};

/**
 * findDuplicate: Returns a list of the duplicate values of the provided list
 *
 * @param   {Array<*>} list
 * @returns {Array<*>}
 */
const findDuplicate = (list = []) => findDuplicateFast(list);

module.exports = findDuplicate;
