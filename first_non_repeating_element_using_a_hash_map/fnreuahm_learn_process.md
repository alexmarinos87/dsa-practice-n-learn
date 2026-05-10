# Problem

Given a list/array of elements, return the first element that appears exactly once.

If every element repeats, return nothing/null.

# Input and output

Input:
A list/array of elements.

Output:
The first non-repeating element.

If no non-repeating element exists, return None/null.

# Example 1

elements = ["a", "b", "a", "c", "b"]

output = "c"

a appears 2 times.
b appears 2 times.
c appears 1 time.

So c is the first non-repeating element.

# Example 2

elements = [4, 5, 4, 6, 5]

output = 6

4 appears 2 times.
5 appears 2 times.
6 appears 1 time.

So 6 is the first non-repeating element.

# Example 3

elements = [1, 1, 2, 2, 3, 3]

output = null

Every value repeats.

# English algorithm

Create an empty hash map called counts.

Go through each item in the input list.

For each item:

If the item is already in counts, add 1 to its count.

Otherwise, add the item to counts with a count of 1.

After counting everything, go through the input list again.

For each item:

If its count is 1, return that item immediately.

If the second loop finishes and no item had count 1, return None/null.

# Pseudocode

```text
function firstNonRepeating(elements):
    counts = empty hash map

    for each item in elements:
        if item is in counts:
            counts[item] = counts[item] + 1
        else:
            counts[item] = 1

    for each item in elements:
        if counts[item] equals 1:
            return item

    return null
```

# Python

```python
def first_non_repeating(elements: list[int]) -> int | None:
    counts = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    for item in elements:
        if counts[item] == 1:
            return item

    return None
```

# Python with strings

```python
def first_non_repeating(elements: list[str]) -> str | None:
    counts = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    for item in elements:
        if counts[item] == 1:
            return item

    return None
```

# Python generic version

```python
from collections.abc import Hashable
from typing import TypeVar

T = TypeVar("T", bound=Hashable)

def first_non_repeating(elements: list[T]) -> T | None:
    counts: dict[T, int] = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    for item in elements:
        if counts[item] == 1:
            return item

    return None
```

# TypeScript

```typescript
function firstNonRepeating<T>(elements: T[]): T | null {
    const counts = new Map<T, number>();

    for (const item of elements) {
        const currentCount = counts.get(item);

        if (currentCount === undefined) {
            counts.set(item, 1);
        } else {
            counts.set(item, currentCount + 1);
        }
    }

    for (const item of elements) {
        if (counts.get(item) === 1) {
            return item;
        }
    }

    return null;
}
```

# Java

```java
import java.util.*;

class Solution {
    public <T> T firstNonRepeating(List<T> elements) {
        Map<T, Integer> counts = new HashMap<>();

        for (T item : elements) {
            if (counts.containsKey(item)) {
                counts.put(item, counts.get(item) + 1);
            } else {
                counts.put(item, 1);
            }
        }

        for (T item : elements) {
            if (counts.get(item) == 1) {
                return item;
            }
        }

        return null;
    }
}
```

# Time and space complexity

Let n be the number of elements in the input list.

# Time complexity

O(n)

We loop through the list twice.

Two separate O(n) loops still simplify to O(n).

# Space complexity

O(n)

In the worst case, every item is unique, so the hash map stores n keys.

# Key pattern

This is a frequency counter plus second pass pattern.

Use it when you need to answer:

Which item has a certain count, while preserving the original order?

The important idea is:

First pass = count everything.
Second pass = use those counts to make a decision in original order.
