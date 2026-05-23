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


print(check([3, 4, 5, 1, 2]))
print(check([2, 1, 3, 4]))
print(check([1, 2, 3]))
