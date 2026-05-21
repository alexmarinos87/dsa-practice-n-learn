# Problem

Given two arrays of positive integers, `arr1` and `arr2`, find the length of the longest common prefix between any pair:

```text
x from arr1
y from arr2
```

A prefix of an integer starts from the leftmost digit.

For example:

```text
123 is a prefix of 12345
234 is not a prefix of 12345
```

# Input and output

Input:
Two arrays of positive integers.

Output:
An integer.

Return the length of the longest common integer prefix between one number from `arr1` and one number from `arr2`.

If no common prefix exists, return `0`.

# Example 1

```text
arr1 = [1, 10, 100]
arr2 = [1000]
```

output:

```text
3
```

The pairs are:

```text
1 and 1000 have common prefix 1
10 and 1000 have common prefix 10
100 and 1000 have common prefix 100
```

The longest common prefix is `100`, and its length is `3`.

# Example 2

```text
arr1 = [1, 2, 3]
arr2 = [4, 4, 4]
```

output:

```text
0
```

There is no common prefix between a number from `arr1` and a number from `arr2`.

# Brute force idea

Compare every number from `arr1` with every number from `arr2`.

For each pair, compare digits from left to right and count the common prefix length.

This would be too slow because both arrays can have up to `5 * 10^4` numbers.

The number of pairs can be:

```text
5 * 10^4 * 5 * 10^4
```

That is O(n * m), which is too large.

# Key idea

Store every prefix from `arr1` in a set.

Then, for every number in `arr2`, repeatedly remove the rightmost digit until we find a prefix that exists in the set.

For example:

```text
number = 1000
```

Its prefixes can be checked by chopping digits from the right:

```text
1000
100
10
1
```

If `100` exists in the prefix set from `arr1`, then the common prefix length is `3`.

# Why a set helps

A set gives fast lookup.

So instead of comparing every pair directly, we ask:

```text
Have I seen this prefix in arr1?
```

This is usually O(1) average time.

# English algorithm

Create an empty set called `prefixes`.

For each number in `arr1`:

Add the number to `prefixes`.

Remove the rightmost digit.

Keep adding shorter prefixes until the number becomes `0`.

Then create `longestLength = 0`.

For each number in `arr2`:

Check whether the number exists in `prefixes`.

If it does, update `longestLength` and stop checking this number.

Otherwise, remove the rightmost digit and try again.

After all numbers in `arr2` are processed, return `longestLength`.

# Pseudocode

```text
function longestCommonPrefix(arr1, arr2):
    prefixes = empty set

    for each number in arr1:
        current = number

        while current > 0:
            add current to prefixes
            current = current / 10 using integer division

    longestLength = 0

    for each number in arr2:
        current = number

        while current > 0:
            if current is in prefixes:
                longestLength = max(longestLength, number of digits in current)
                break

            current = current / 10 using integer division

    return longestLength
```

# Python

```python
def longest_common_prefix(arr1: list[int], arr2: list[int]) -> int:
    prefixes: set[int] = set()

    for number in arr1:
        current = number

        while current > 0:
            prefixes.add(current)
            current //= 10

    longest_length = 0

    for number in arr2:
        current = number

        while current > 0:
            if current in prefixes:
                longest_length = max(longest_length, len(str(current)))
                break

            current //= 10

    return longest_length
```

# TypeScript

```typescript
function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixes = new Set<number>();

    for (const number of arr1) {
        let current = number;

        while (current > 0) {
            prefixes.add(current);
            current = Math.floor(current / 10);
        }
    }

    let longestLength = 0;

    for (const number of arr2) {
        let current = number;

        while (current > 0) {
            if (prefixes.has(current)) {
                longestLength = Math.max(longestLength, String(current).length);
                break;
            }

            current = Math.floor(current / 10);
        }
    }

    return longestLength;
}
```

# Java

```java
import java.util.*;

class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        Set<Integer> prefixes = new HashSet<>();

        for (int number : arr1) {
            int current = number;

            while (current > 0) {
                prefixes.add(current);
                current /= 10;
            }
        }

        int longestLength = 0;

        for (int number : arr2) {
            int current = number;

            while (current > 0) {
                if (prefixes.contains(current)) {
                    longestLength = Math.max(longestLength, String.valueOf(current).length());
                    break;
                }

                current /= 10;
            }
        }

        return longestLength;
    }
}
```

# Dry run

```text
arr1 = [1, 10, 100]
arr2 = [1000]
```

Build prefixes from `arr1`:

```text
1 gives: 1
10 gives: 10, 1
100 gives: 100, 10, 1
```

So the prefix set is:

```text
{1, 10, 100}
```

Now check `1000` from `arr2`:

```text
1000 is not in the set
100 is in the set
```

So the longest common prefix length is:

```text
length of 100 = 3
```

# Why this works

Every possible prefix from `arr1` is stored in the set.

For each number in `arr2`, removing digits from the right checks its prefixes from longest to shortest.

The first matching prefix for one `arr2` number is the longest match for that number.

Taking the maximum across all numbers in `arr2` gives the answer.

# Important detail

Common prefixes between two numbers in the same array do not count.

This algorithm respects that because:

```text
prefixes are built only from arr1
numbers are checked only from arr2
```

# Time and space complexity

Let:

```text
n = length of arr1
m = length of arr2
d = maximum number of digits in any number
```

Here `d` is at most `9` because values are at most `10^8`.

# Time complexity

O((n + m) * d)

Each number is reduced by one digit at a time.

Since `d` is small, this is effectively linear in the input size.

# Space complexity

O(n * d)

In the worst case, we store every prefix from every number in `arr1`.

# Key pattern

This is a prefix set pattern.

Use it when:

You need to compare prefixes across two groups.

You can generate all prefixes from one group.

You can quickly check whether prefixes from the other group exist.

The important idea is:

```text
Store prefixes from one side, then search prefixes from the other side.
```
