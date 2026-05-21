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


print(longest_common_prefix([1, 10, 100], [1000]))
print(longest_common_prefix([1, 2, 3], [4, 4, 4]))
