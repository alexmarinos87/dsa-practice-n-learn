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


print(separate_digits([13, 25, 83, 77]))
print(separate_digits([7, 1, 3, 9]))
