# Data Structures & Algorithms Learning Journal

An explanation-first practice repository for strengthening computer-science fundamentals across **Python, TypeScript and Java**.

This repository has a different purpose from [`leetcode-solutions`](https://github.com/alexmarinos87/leetcode-solutions):

- **`leetcode-solutions`** is the automated archive of submitted solutions.
- **This repository** records the reasoning behind a solution: examples, pseudocode, trade-offs, complexity and reimplementation across languages.

## Learning loop

For each exercise, the intended process is:

1. Define the inputs and outputs.
2. Write two or three examples.
3. Explain the algorithm in plain English.
4. Write pseudocode.
5. Implement it in Python.
6. Implement it in TypeScript.
7. Translate it to Java.
8. State the time and space complexity.
9. Retype the solution from memory.
10. Apply the same pattern to a related LeetCode problem.

See [`my_learning_process.md`](./my_learning_process.md) for the original checklist.

## Patterns covered

| Pattern | Example exercises |
| --- | --- |
| Arrays and manual traversal | [Manual search](./manual_search_in_a_list_array), [separate digits](./separate_the_digits_in_an_array) |
| Sets and hash maps | [Duplicate detection](./duplicate_detection_using_a_set), [frequency counter](./frequency_counter_using_a_hash_map), [first non-repeating element](./first_non_repeating_element_using_a_hash_map) |
| Two pointers | [Rotating the box](./rotating_the_box_using_two_pointers) |
| Binary search | [Search in a rotated sorted array](./search_in_rotated_sorted_array_using_binary_search) |
| Graph traversal | [Reachability using DFS](./graph_reachability_using_dfs) |
| Prefix and frequency techniques | [Longest common prefix](./longest_common_prefix_using_prefix_set), [prefix common array](./prefix_common_array_using_frequency_tracking) |
| Array invariants | [Sorted and rotated array check](./check_if_array_is_sorted_and_rotated_using_drop_count) |

## What a lesson contains

A completed lesson is designed to include:

```text
<exercise>/
├── <solution>.py
├── <solution>.ts
├── <solution>.java
└── <exercise>_learn_process.md
```

For example, the [rotated-array binary-search lesson](./search_in_rotated_sorted_array_using_binary_search) contains implementations in all three languages plus a detailed learning write-up.

## Practice standard

A solution is not considered learned merely because it passes. The aim is to be able to:

- explain why the algorithm works;
- identify the reusable pattern;
- state its complexity;
- recognise edge cases;
- compare it with a simpler approach; and
- reproduce it without copying.

## Next improvements

- Add a root index with pattern, difficulty, language coverage and complexity.
- Add automated tests for each implementation.
- Record revisit dates and whether a solution was reproduced from memory.
- Link each lesson to one or more related LeetCode problems.
