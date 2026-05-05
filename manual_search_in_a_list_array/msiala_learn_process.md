# Problem

Given a list/ array of numbers and a target number, return true if the target exists.

# Example

values = [10, 20, 30, 40]
target = 30

output = true

# Example 2 

values = [10, 20, 30, 40]
target = 99

output = false

# English algorithm

Go through each value on by one.
If the current value equals the target value, return true.
If we finish the look and never find it return false.

# Pseudocode

function contains(values, target):
    for each value in values:
        if value equals target:
            return true

    return false

# Python

def contains(values: list[int], target: int) -> bool:
    for value in values:
        if value == target:
            return True
    return False