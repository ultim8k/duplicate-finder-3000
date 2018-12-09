#!/usr/bin/env node

const minimist = require("minimist");

const main = require("./main");

const { n, number } = minimist(process.argv.slice(2));

const input = n || number;

const isInvalidInput = input && typeof input !== "number";

if (isInvalidInput) {
  console.log("Input is not valid.\nExiting.");
  process.exit(1);
}

const providedNumber = input || 1000000;
const listSize = providedNumber + 1;

console.log(
  `Generating a random list of ${listSize} integers ranging from 1 to ${providedNumber}...\n`
);

const duplicates = main(providedNumber);

console.log(`Duplicates: [ ${duplicates.join(", ")} ]\n`);
console.log(
  `Found ${duplicates.length} duplicates in a list of ${listSize} integers.`
);
