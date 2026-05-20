# Problem

Given two permutations `A` and `B` of length `n`, return the prefix common array.

At each index `i`, count how many numbers appear in both prefixes:

```text
A[0...i]
B[0...i]
```

# Input and output

Input:
Two integer arrays `A` and `B`.

Both arrays are permutations of the numbers from `1` to `n`.

Output:
An integer array `answer`, where `answer[i]` is the number of values that appear in both prefixes up to index `i`.

# Example 1

```text
A = [1, 3, 2, 4]
B = [3, 1, 2, 4]
```

output:

```text
[0, 2, 3, 4]
```

At index `0`:

```text
A prefix = [1]
B prefix = [3]
```

There are no common values.

At index `1`:

```text
A prefix = [1, 3]
B prefix = [3, 1]
```

The common values are `1` and `3`.

# Example 2

```text
A = [2, 3, 1]
B = [3, 1, 2]
```

output:

```text
[0, 1, 3]
```

At index `1`:

```text
A prefix = [2, 3]
B prefix = [3, 1]
```

Only `3` is common.

# Brute force idea

For every index `i`:

Create the prefix from `A`.

Create the prefix from `B`.

Count how many numbers appear in both prefixes.

This repeats work at every index, so the time complexity is O(n^2).

# Key idea

Use a frequency array while scanning from left to right.

Because `A` and `B` are permutations, each number can appear:

```text
0 times: not seen yet
1 time: seen in one prefix
2 times: seen in both prefixes
```

So a value becomes common exactly when its frequency becomes `2`.

# English algorithm

Create an answer array.

Create a frequency array of size `n + 1`.

Create a variable `commonCount` and start it at `0`.

For each index `i`:

Add `A[i]` to the frequency array.

If `A[i]` now has frequency `2`, increase `commonCount`.

Add `B[i]` to the frequency array.

If `B[i]` now has frequency `2`, increase `commonCount`.

Set `answer[i]` to `commonCount`.

After the loop finishes, return `answer`.

# Pseudocode

```text
function findPrefixCommonArray(A, B):
    n = length of A
    answer = new array of size n
    frequency = new array of size n + 1 filled with 0
    commonCount = 0

    for i from 0 to n - 1:
        frequency[A[i]] = frequency[A[i]] + 1

        if frequency[A[i]] equals 2:
            commonCount = commonCount + 1

        frequency[B[i]] = frequency[B[i]] + 1

        if frequency[B[i]] equals 2:
            commonCount = commonCount + 1

        answer[i] = commonCount

    return answer
```

# Python

```python
def find_the_prefix_common_array(A: list[int], B: list[int]) -> list[int]:
    n = len(A)
    answer: list[int] = [0] * n
    frequency: list[int] = [0] * (n + 1)
    common_count = 0

    for i in range(n):
        frequency[A[i]] += 1
        if frequency[A[i]] == 2:
            common_count += 1

        frequency[B[i]] += 1
        if frequency[B[i]] == 2:
            common_count += 1

        answer[i] = common_count

    return answer
```

# TypeScript

```typescript
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const answer = new Array<number>(n);
    const frequency = new Array<number>(n + 1).fill(0);
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        frequency[A[i]]++;
        if (frequency[A[i]] === 2) {
            commonCount++;
        }

        frequency[B[i]]++;
        if (frequency[B[i]] === 2) {
            commonCount++;
        }

        answer[i] = commonCount;
    }

    return answer;
}
```

# Java

```java
class Solution {
    public int[] findThePrefixCommonArray(int[] A, int[] B) {
        int n = A.length;
        int[] answer = new int[n];
        int[] frequency = new int[n + 1];
        int commonCount = 0;

        for (int i = 0; i < n; i++) {
            frequency[A[i]]++;
            if (frequency[A[i]] == 2) {
                commonCount++;
            }

            frequency[B[i]]++;
            if (frequency[B[i]] == 2) {
                commonCount++;
            }

            answer[i] = commonCount;
        }

        return answer;
    }
}
```

# Why this works

At every index `i`, the algorithm has processed:

```text
A[0], A[1], ..., A[i]
B[0], B[1], ..., B[i]
```

So `frequency[x]` tells us how many times `x` has appeared across both prefixes.

Since each array is a permutation, a value can appear at most once in `A` and once in `B`.

Therefore:

```text
frequency[x] == 2
```

means `x` appears in both prefixes.

# Important edge case

```text
A = [1]
B = [1]
```

When index `0` is processed:

```text
frequency[1] becomes 1 after A[0]
frequency[1] becomes 2 after B[0]
```

So the answer is:

```text
[1]
```

This also explains why the algorithm works when `A[i] == B[i]`.

# Time and space complexity

Let `n` be the length of the arrays.

# Time complexity

O(n)

Each index is processed once.

# Space complexity

O(n)

The frequency array has size `n + 1`, and the answer array has size `n`.

# Key pattern

This is a prefix scan plus frequency tracking pattern.

Use it when a problem asks:

How many values are common between two prefixes?

The important idea is:

```text
A value becomes common when its frequency becomes 2.
```
