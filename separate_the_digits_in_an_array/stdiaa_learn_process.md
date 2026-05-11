# Problem

Given an array of positive integers, return one array containing the digits of each number in the same order.

# Input and output

Input:
An array of positive integers.

Output:
An array containing every digit from every number.

# Example 1

nums = [13, 25, 83, 77]

output = [1, 3, 2, 5, 8, 3, 7, 7]

13 becomes [1, 3].
25 becomes [2, 5].
83 becomes [8, 3].
77 becomes [7, 7].

# Example 2

nums = [7, 1, 3, 9]

output = [7, 1, 3, 9]

Each number already has one digit.

# English algorithm

Create an empty answer list.

Go through each number in nums.

For each number:

Use modulo 10 to get the rightmost digit.

Use integer division by 10 to remove the rightmost digit.

This gives the digits from right to left, so reverse the current number's digit list.

Add those digits to the answer list.

After all numbers are processed, return the answer list.

# Pseudocode

```text
function separateDigits(nums):
    answer = empty list

    for each number in nums:
        currentDigits = empty list

        while number > 0:
            add number % 10 to currentDigits
            number = number / 10 using integer division

        reverse currentDigits
        add all currentDigits to answer

    return answer
```

# Python

```python
def separate_digits(nums: list[int]) -> list[int]:
    answer: list[int] = []

    for number in nums:
        digits_of_current_number: list[int] = []

        while number > 0:
            digits_of_current_number.append(number % 10)
            number //= 10

        digits_of_current_number.reverse()
        answer.extend(digits_of_current_number)

    return answer
```

# TypeScript

```typescript
function separateDigits(nums: number[]): number[] {
    const answer: number[] = [];

    for (let number of nums) {
        const digitsOfCurrentNumber: number[] = [];

        while (number > 0) {
            digitsOfCurrentNumber.push(number % 10);
            number = Math.floor(number / 10);
        }

        digitsOfCurrentNumber.reverse();
        answer.push(...digitsOfCurrentNumber);
    }

    return answer;
}
```

# Java

```java
import java.util.*;

class Solution {
    public int[] separateDigits(int[] nums) {
        List<Integer> answer = new ArrayList<>();

        for (int number : nums) {
            List<Integer> digitsOfCurrentNumber = new ArrayList<>();

            while (number > 0) {
                digitsOfCurrentNumber.add(number % 10);
                number /= 10;
            }

            Collections.reverse(digitsOfCurrentNumber);
            answer.addAll(digitsOfCurrentNumber);
        }

        int[] resultArray = new int[answer.size()];
        for (int i = 0; i < resultArray.length; i++) {
            resultArray[i] = answer.get(i);
        }

        return resultArray;
    }
}
```

# Runtime error note

The final Java loop must use `i < resultArray.length`.

If it uses `i <= resultArray.length`, the loop tries to read one index past the end of the list.

For an array of length 8, valid indexes are 0 through 7.
Index 8 is out of bounds.

# Time and space complexity

Let d be the total number of digits across all numbers in nums.

# Time complexity

O(d)

Each digit is extracted once and added to the answer.

# Space complexity

O(d)

The answer array stores all digits.
