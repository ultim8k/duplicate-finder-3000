/*
  Some analysis of the `generate` function:

  `Math.random()` generates a number between 0 and 1 WITHOUT including 1.
  `max - min + 1` creates an inclusive range from min to max.
  `Math.random() * (max - min + 1)` generates a random float from 0 to the range we calculated.
  `Math.floor(SOME_FLOAT_NUMBER)` converts the float by removing the decimal digits.
  Finally by adding the min value to the produced random integer, the number gets within the provided range.
*/

/**
 * generate: Creates a random integer between the MIN and MAX values including them
 *
 * @param   {Integer} [min]
 * @param   {Integer} [max]
 * @returns {Integer}
 */
const generate = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = generate;
