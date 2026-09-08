# DSA Learning Progress

This index records what is present in the repository. It is deliberately separate from mastery or recall evidence.

A check mark means that the corresponding implementation or learning-process file exists in the lesson directory. It does **not** mean that the solution has recently been retested, reproduced from memory or mastered.

## Current lesson coverage

| Pattern | Lesson | Python | TypeScript | Java | Learning notes | Revisit evidence |
| --- | --- | :---: | :---: | :---: | :---: | --- |
| Arrays / manual traversal | [Manual search in a list](./manual_search_in_a_list_array) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Arrays / digit decomposition | [Separate the digits in an array](./separate_the_digits_in_an_array) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Sets / membership lookup | [Duplicate detection using a set](./duplicate_detection_using_a_set) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Hash maps / frequency counting | [Frequency counter using a hash map](./frequency_counter_using_a_hash_map) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Hash maps / first unique value | [First non-repeating element](./first_non_repeating_element_using_a_hash_map) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Graphs / depth-first search | [Graph reachability using DFS](./graph_reachability_using_dfs) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Strings / prefix candidates | [Longest common prefix using a prefix set](./longest_common_prefix_using_prefix_set) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Prefixes / frequency tracking | [Prefix common array](./prefix_common_array_using_frequency_tracking) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Two pointers / simulation | [Rotating the box](./rotating_the_box_using_two_pointers) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Binary search | [Search in a rotated sorted array](./search_in_rotated_sorted_array_using_binary_search) | ✅ | ✅ | ✅ | ✅ | Not recorded |
| Arrays / invariants | [Check whether an array is sorted and rotated](./check_if_array_is_sorted_and_rotated_using_drop_count) | ✅ | ✅ | ✅ | ✅ | Not recorded |

## What counts as revisit evidence

A future revisit should record evidence such as:

- the date attempted without copying;
- whether the algorithm was explained before implementation;
- which languages were reproduced from memory;
- whether time and space complexity were stated correctly;
- edge cases that were initially missed; and
- the next planned revisit date.

Until that information is recorded, the table stays at `Not recorded` even when implementation files are present.

## Revisit log template

Copy this block below the relevant lesson when a genuine revisit takes place:

```markdown
### YYYY-MM-DD — lesson name

- Attempted without notes: Yes / No
- Explained the pattern first: Yes / No
- Reproduced in: Python / TypeScript / Java
- Complexity stated correctly: Yes / No
- Edge cases missed:
- What changed in my understanding:
- Next revisit:
```

## Adding a future lesson

A new lesson should normally contain:

```text
<exercise>/
├── <solution>.py
├── <solution>.ts
├── <solution>.java
└── <exercise>_learn_process.md
```

Then add one row to this index with the actual file coverage. Leave revisit evidence as `Not recorded` until the lesson has been attempted again from memory.

## Suggested next pattern coverage

The present repository already covers arrays, hashing, prefixes, two pointers, binary search and one graph traversal. Useful future additions would broaden the journal into:

- sliding windows;
- stacks and queues;
- linked lists;
- trees and breadth-first search;
- heaps and priority queues;
- intervals;
- dynamic programming; and
- union-find.

These are future coverage ideas, not completed lessons.
