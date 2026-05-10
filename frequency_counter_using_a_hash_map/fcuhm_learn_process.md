# Problem

Given a list/array of elements, return a map/dictionary showing how many times each element appears.

# Input and output

Input:
A list/array of elements.

Output:
A map/dictionary where:

key = the element
value = how many times it appears

Note:
The order of the keys may vary depending on the language and map type.

# Example 1

elements = ["a", "b", "a", "c", "b", "a"]

output = {
    "a": 3,
    "b": 2,
    "c": 1
}

a appears 3 times.
b appears 2 times.
c appears 1 time.

# Example 2

elements = [10, 20, 10, 30, 20, 10]

output = {
    10: 3,
    20: 2,
    30: 1
}

10 appears 3 times.
20 appears 2 times.
30 appears 1 time.

# Example 3

elements = []

output = {}

There are no elements to count.

# English algorithm

Create an empty hash map called counts.

Go through each item in the input list.

For each item:

If the item is already a key in counts, add 1 to its current count.

Otherwise, add the item to counts with a value of 1.

After the loop finishes, return counts.

# Pseudocode

```text
function countFrequencies(elements):
    counts = empty hash map

    for each item in elements:
        if item is in counts:
            counts[item] = counts[item] + 1
        else:
            counts[item] = 1

    return counts
```

# Python

```python
def count_frequencies(elements: list[int]) -> dict[int, int]:
    counts = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    return counts
```

# Python with strings

```python
def count_frequencies(elements: list[str]) -> dict[str, int]:
    counts = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    return counts
```

# Python generic version

```python
from collections.abc import Hashable
from typing import TypeVar

T = TypeVar("T", bound=Hashable)

def count_frequencies(elements: list[T]) -> dict[T, int]:
    counts: dict[T, int] = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    return counts
```

# TypeScript

```typescript
function countFrequencies<T>(elements: T[]): Map<T, number> {
    const counts = new Map<T, number>();

    for (const item of elements) {
        const currentCount = counts.get(item);

        if (currentCount === undefined) {
            counts.set(item, 1);
        } else {
            counts.set(item, currentCount + 1);
        }
    }

    return counts;
}
```

# Java

```java
import java.util.*;

class Solution {
    public <T> Map<T, Integer> countFrequencies(List<T> elements) {
        Map<T, Integer> counts = new HashMap<>();

        for (T item : elements) {
            if (counts.containsKey(item)) {
                counts.put(item, counts.get(item) + 1);
            } else {
                counts.put(item, 1);
            }
        }

        return counts;
    }
}
```

# Time and space complexity

Let n be the number of elements in the input list.

# Time complexity

O(n)

We loop through the list once.

Checking and updating a hash map is usually O(1) on average.

So the total time complexity is O(n).

# Space complexity

O(n)

In the worst case, every item is unique, so the hash map stores n keys.

So the space complexity is O(n).

# Key pattern

This is a frequency counter pattern.

Use it when you need to answer:

How many times have I seen this item?

The important idea is:

counts = item -> number of times seen

This pattern is useful for:

Finding the most frequent element.
Finding the first non-repeating element.
Checking if two strings are anagrams.
Counting duplicates.
