def contains(values: list[int], target: int) -> bool:
    for value in values:
        if value == target:
            return True

    return False

numbers = [10, 20, 30, 40]

print(contains(numbers, 30))
print(contains(numbers, 99))