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


print(find_the_prefix_common_array([1, 3, 2, 4], [3, 1, 2, 4]))
print(find_the_prefix_common_array([2, 3, 1], [3, 1, 2]))
