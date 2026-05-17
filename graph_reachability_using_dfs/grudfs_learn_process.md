# Problem

Given an array of non-negative integers and a starting index, decide whether you can reach any index whose value is 0.

From index `i`, you can jump to:

```text
i + arr[i]
i - arr[i]
```

You cannot jump outside the array.

# Input and output

Input:
An array of non-negative integers and a starting index.

Output:
A boolean.

Return `true` if a value of 0 is reachable.
Return `false` if no value of 0 is reachable.

# Example 1

arr = [4, 2, 3, 0, 3, 1, 2]
start = 5

output = true

One possible path is:

```text
5 -> 4 -> 1 -> 3
```

Index 3 has value 0.

# Example 2

arr = [4, 2, 3, 0, 3, 1, 2]
start = 0

output = true

One possible path is:

```text
0 -> 4 -> 1 -> 3
```

Index 3 has value 0.

# Example 3

arr = [3, 0, 2, 1, 2]
start = 2

output = false

There is no valid jump path from index 2 to index 1.

# Graph idea

This problem looks like an array problem, but it is really a graph reachability problem.

Each index is a node.

Each valid jump is an edge.

For example, if `arr[i] = 3`, then index `i` has up to two neighbors:

```text
i + 3
i - 3
```

The question is:

Can we reach a node whose value is 0?

# English algorithm

Create a stack containing the starting index.

Create an empty set called visited.

While the stack is not empty:

Remove one index from the stack.

If the index is outside the array, skip it.

If the index was already visited, skip it.

If the value at this index is 0, return true.

Mark the index as visited.

Add the two possible next indexes to the stack:

```text
i + arr[i]
i - arr[i]
```

If the loop finishes without finding a 0, return false.

# Pseudocode

```text
function canReach(arr, start):
    stack = [start]
    visited = empty set

    while stack is not empty:
        i = remove last item from stack

        if i is outside the array:
            continue

        if i is in visited:
            continue

        if arr[i] equals 0:
            return true

        add i to visited

        add i + arr[i] to stack
        add i - arr[i] to stack

    return false
```

# Python

```python
def can_reach(arr: list[int], start: int) -> bool:
    n = len(arr)
    stack = [start]
    visited: set[int] = set()

    while stack:
        i = stack.pop()

        if i < 0 or i >= n or i in visited:
            continue

        if arr[i] == 0:
            return True

        visited.add(i)

        stack.append(i + arr[i])
        stack.append(i - arr[i])

    return False
```

# TypeScript

```typescript
function canReach(arr: number[], start: number): boolean {
    const n = arr.length;
    const stack: number[] = [start];
    const visited = new Set<number>();

    while (stack.length > 0) {
        const i = stack.pop() as number;

        if (i < 0 || i >= n || visited.has(i)) {
            continue;
        }

        if (arr[i] === 0) {
            return true;
        }

        visited.add(i);

        stack.push(i + arr[i]);
        stack.push(i - arr[i]);
    }

    return false;
}
```

# Java

```java
import java.util.*;

class Solution {
    public boolean canReach(int[] arr, int start) {
        int n = arr.length;
        Deque<Integer> stack = new ArrayDeque<>();
        Set<Integer> visited = new HashSet<>();

        stack.push(start);

        while (!stack.isEmpty()) {
            int i = stack.pop();

            if (i < 0 || i >= n || visited.contains(i)) {
                continue;
            }

            if (arr[i] == 0) {
                return true;
            }

            visited.add(i);

            stack.push(i + arr[i]);
            stack.push(i - arr[i]);
        }

        return false;
    }
}
```

# Why visited matters

The same index can be reached more than once.

Without `visited`, the algorithm can get stuck jumping around the same indexes forever.

Example:

```text
arr = [1, 1]
start = 0
```

From index 0, you can jump to index 1.
From index 1, you can jump back to index 0.

The visited set stops this cycle.

# Time and space complexity

Let n be the length of the array.

# Time complexity

O(n)

Each valid index is processed at most once.

# Space complexity

O(n)

The visited set can store up to n indexes.

The stack can also store indexes waiting to be processed.

# Key pattern

This is graph reachability using DFS.

Use it when you need to answer:

Can I get from a starting state to a target state?

The important idea is:

```text
stack = places to explore
visited = places already explored
neighbors = next valid moves
```
