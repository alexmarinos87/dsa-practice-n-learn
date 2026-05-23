# Problem

Given an integer array `nums`, return `true` if it was originally sorted in non-decreasing order and then rotated some number of positions.

The array may contain duplicates.

# Input and output

Input:
An integer array `nums`.

Output:
A boolean.

Return `true` if `nums` can be made from a sorted non-decreasing array by rotation.

Return `false` otherwise.

# Example 1

```text
nums = [3, 4, 5, 1, 2]
```

output:

```text
true
```

The original sorted array is:

```text
[1, 2, 3, 4, 5]
```

It can be rotated to become:

```text
[3, 4, 5, 1, 2]
```

# Example 2

```text
nums = [2, 1, 3, 4]
```

output:

```text
false
```

There is no sorted array rotation that creates this order.

# Example 3

```text
nums = [1, 2, 3]
```

output:

```text
true
```

The array is already sorted, so it is a rotation by zero positions.

# Key idea

A sorted non-decreasing array has no place where a number is greater than the next number.

Example:

```text
[1, 2, 3, 4]
```

There are zero drops.

A sorted array that has been rotated can have exactly one drop.

Example:

```text
[3, 4, 5, 1, 2]
```

The only drop is:

```text
5 > 1
```

If there are more than one drops, the array cannot be sorted and rotated.

# Circular comparison

The last element must also be compared to the first element.

Use:

```text
nextIndex = (i + 1) % n
```

This compares:

```text
nums[0] with nums[1]
nums[1] with nums[2]
...
nums[n - 1] with nums[0]
```

# Why duplicates are okay

The original array is sorted in non-decreasing order.

That means equal values are allowed.

So this is not a drop:

```text
nums[i] == nums[nextIndex]
```

Only this is a drop:

```text
nums[i] > nums[nextIndex]
```

# English algorithm

Create `drops` and set it to `0`.

Loop through every index `i`.

Compare `nums[i]` with the next circular value:

```text
nums[(i + 1) % n]
```

If `nums[i]` is greater than the next value, increase `drops`.

If `drops` becomes greater than `1`, return `false`.

After the loop, return `true`.

# Pseudocode

```text
function check(nums):
    drops = 0
    n = length of nums

    for i from 0 to n - 1:
        nextIndex = (i + 1) % n

        if nums[i] > nums[nextIndex]:
            drops = drops + 1

        if drops > 1:
            return false

    return true
```

# Python

```python
def check(nums: list[int]) -> bool:
    drops = 0
    n = len(nums)

    for i in range(n):
        next_index = (i + 1) % n

        if nums[i] > nums[next_index]:
            drops += 1

        if drops > 1:
            return False

    return True
```

# TypeScript

```typescript
function check(nums: number[]): boolean {
    let drops = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const nextIndex = (i + 1) % n;

        if (nums[i] > nums[nextIndex]) {
            drops++;
        }

        if (drops > 1) {
            return false;
        }
    }

    return true;
}
```

# Java

```java
class Solution {
    public boolean check(int[] nums) {
        int drops = 0;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int nextIndex = (i + 1) % n;

            if (nums[i] > nums[nextIndex]) {
                drops++;
            }

            if (drops > 1) {
                return false;
            }
        }

        return true;
    }
}
```

# Why this works

If the array is sorted and not rotated, every adjacent pair is non-decreasing.

The circular comparison from the last value to the first value may create one drop:

```text
largest value > smallest value
```

If the array is sorted and rotated, the rotation point also creates exactly one drop.

Any extra drop means there is another place where the order breaks, so the array cannot be a rotation of a sorted array.

# Important edge cases

```text
[1]
```

There are zero drops, so return `true`.

```text
[1, 1, 1]
```

Equal values are not drops, so return `true`.

```text
[2, 1, 3, 4]
```

There are two drops:

```text
2 > 1
4 > 2
```

So return `false`.

# Time and space complexity

Let `n` be the length of `nums`.

# Time complexity

O(n)

The loop visits each index once.

# Space complexity

O(1)

Only a few variables are used.
