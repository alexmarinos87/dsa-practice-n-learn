# Problem

Given a sorted array with distinct values, the array may have been rotated.

Example:

```text
[0, 1, 2, 4, 5, 6, 7]
```

can become:

```text
[4, 5, 6, 7, 0, 1, 2]
```

Given the rotated array and a target value, return the index of the target.

If the target is not in the array, return `-1`.

The required time complexity is O(log n).

# Input and output

Input:
An integer array `nums` and an integer `target`.

Output:
The index of `target`, or `-1` if it does not exist.

# Example 1

```text
nums = [4, 5, 6, 7, 0, 1, 2]
target = 0
```

output:

```text
4
```

# Example 2

```text
nums = [4, 5, 6, 7, 0, 1, 2]
target = 3
```

output:

```text
-1
```

# Example 3

```text
nums = [1]
target = 0
```

output:

```text
-1
```

# Brute force idea

Scan the array from left to right.

If we find the target, return its index.

If we finish the loop, return `-1`.

This is O(n), but the problem requires O(log n), so we need binary search.

# Key idea

Even though the full array is rotated, at least one half around `mid` is always sorted.

For every binary search step:

If the left half is sorted, decide whether the target is inside that left half.

If the right half is sorted, decide whether the target is inside that right half.

Then discard the half that cannot contain the target.

# How to know which half is sorted

Use:

```text
nums[left] <= nums[mid]
```

If this is true, the left half is sorted:

```text
left ... mid
```

Otherwise, the right half is sorted:

```text
mid ... right
```

# English algorithm

Create `left = 0`.

Create `right = nums.length - 1`.

While `left <= right`:

Find the middle index.

If `nums[mid]` equals `target`, return `mid`.

If the left half is sorted:

Check whether the target is between `nums[left]` and `nums[mid]`.

If yes, move `right` to `mid - 1`.

Otherwise, move `left` to `mid + 1`.

If the right half is sorted:

Check whether the target is between `nums[mid]` and `nums[right]`.

If yes, move `left` to `mid + 1`.

Otherwise, move `right` to `mid - 1`.

If the loop finishes, return `-1`.

# Pseudocode

```text
function search(nums, target):
    left = 0
    right = length of nums - 1

    while left <= right:
        mid = left + (right - left) / 2

        if nums[mid] equals target:
            return mid

        if nums[left] <= nums[mid]:
            if nums[left] <= target and target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target and target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1
```

# Python

```python
def search(nums: list[int], target: int) -> int:
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1
```

# TypeScript

```typescript
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
```

# Java

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            }

            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return -1;
    }
}
```

# Dry run

```text
nums = [4, 5, 6, 7, 0, 1, 2]
target = 0
```

Start:

```text
left = 0
right = 6
mid = 3
nums[mid] = 7
```

The left half `[4, 5, 6, 7]` is sorted.

Target `0` is not inside that sorted half, so search right:

```text
left = 4
right = 6
```

Next:

```text
mid = 5
nums[mid] = 1
```

The left half `[0, 1]` is sorted.

Target `0` is inside it, so search left:

```text
left = 4
right = 4
```

Next:

```text
mid = 4
nums[mid] = 0
```

Return `4`.

# Why this works

Rotation splits the original sorted array into two sorted parts.

At any middle index, one side must still be sorted.

Once we know which side is sorted, we can check whether the target could be inside that side.

If it cannot be there, we safely discard it.

That keeps the binary search O(log n).

# Important detail

The values are distinct.

That makes this condition reliable:

```text
nums[left] <= nums[mid]
```

If duplicates were allowed, the problem would need extra handling.

# Time and space complexity

Let `n` be the length of `nums`.

# Time complexity

O(log n)

Each loop removes about half of the remaining search space.

# Space complexity

O(1)

Only a few variables are used.

# Key pattern

This is modified binary search.

Use it when:

The array is sorted but rotated.

You need O(log n).

The important idea is:

```text
One side of mid is always sorted.
```
