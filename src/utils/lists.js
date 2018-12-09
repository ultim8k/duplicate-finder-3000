/**
 * createList: Creates a new "empty" iterable list of provided size
 *
 * @param   {Integer} [size]
 * @returns {Array}
 */
const createList = (size = 0) => new Array(size).fill();

module.exports = createList;
