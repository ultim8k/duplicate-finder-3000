# Challenge

Write a program to classify duplicates in a list.

First generate a list of `N + 1` ints with values ranging between `1` and `N`. Therefore there must be at least one duplicate in the list.

Write a function that will find and print out all of the integers that are duplicated.

## Examples

- `N = 3`. This would generate a list with `N + 1 = 4` ints, ranging from `1 -> 3`, e.g. `{2, 3, 3, 2}`. Your function should therefore print out `'2'` and `'3'`.
- `N = 4`. This would generate, for example, `{3, 2, 1, 1, 4}` and then you would have to print the value `'1'`.

## Requirements

1. The value `N` is to be specified as a command line argument. Default value should be `1,000,000`.
2. The lookup of the duplicates is time critical, make this as efficient as possible.

## Success Criteria

1. The candidate should write code to solve this using one of the following languages: C++, C#, Go, Typescript, Javascript.
2. Write the solution as if it were production code that you would check in to your source control repository. We will look at the solution as if it were a code review.
