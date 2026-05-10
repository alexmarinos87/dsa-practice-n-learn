# Problem

Given a list/array of elements, return a list/array containing the elements that appear more than once.

Each duplicate value should only be returned once.

# Input and output

Input:
A list/array of elements.

Output:
A list/array containing the duplicated elements.

Note:
The basic set-based version returns each duplicate once, but the order may vary in languages where sets do not preserve insertion order.

# Example 1

elements = [1, 2, 3, 2, 4, 5, 1]

output = [2, 1]

2 appears more than once.
1 appears more than once.

# Example 2

elements = [10, 20, 30, 40]

output = []

No value appears more than once.

# Example 3

elements = ["a", "b", "c", "a", "b", "a"]

output = ["a", "b"]

a appears multiple times.
b appears multiple times.
But each duplicate is returned only once.

# English algorithm

Create an empty set called seen.

Create another empty set called duplicates.

Go through each item in the input list.

For each item:

If the item is already in seen, that means we have seen it before, so add it to duplicates.

Otherwise, add the item to seen.

After the loop finishes, convert duplicates into a list/array and return it.

# Pseudocode

```text
function findDuplicates(elements):
    seen = empty set
    duplicates = empty set

    for each item in elements:
        if item is in seen:
            add item to duplicates
        else:
            add item to seen

    return duplicates as list
```

# Python

```python
def find_duplicates(elements: list[int]) -> list[int]:
    seen = set()
    duplicates = set()

    for item in elements:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)
```

# Python with strings

```python
def find_duplicates(elements: list[str]) -> list[str]:
    seen = set()
    duplicates = set()

    for item in elements:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)
```

# Python generic version

```python
from typing import TypeVar

T = TypeVar("T")

def find_duplicates(elements: list[T]) -> list[T]:
    seen: set[T] = set()
    duplicates: set[T] = set()

    for item in elements:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)

    return list(duplicates)
```

# TypeScript

```typescript
function findDuplicates<T>(elements: T[]): T[] {
    const seen = new Set<T>();
    const duplicates = new Set<T>();

    for (const item of elements) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}
```

# Java

```java
import java.util.*;

class Solution {
    public <T> List<T> findDuplicates(List<T> elements) {
        Set<T> seen = new HashSet<>();
        Set<T> duplicates = new HashSet<>();

        for (T item : elements) {
            if (seen.contains(item)) {
                duplicates.add(item);
            } else {
                seen.add(item);
            }
        }

        return new ArrayList<>(duplicates);
    }
}
```

# Time and space complexity

Let n be the number of elements in the input list.

# Time complexity

O(n)

We loop through the list once.

Checking whether something is inside a hash set is usually O(1) on average.

So the total time complexity is O(n).

# Space complexity

O(n)

In the worst case, we may store many elements in seen and duplicates.

So the space complexity is O(n).

# Key pattern

This is a set-based duplicate detection pattern.

Use it when you need to answer:

Have I seen this item before?

The important idea is:

seen = items encountered so far
duplicates = items encountered more than once
