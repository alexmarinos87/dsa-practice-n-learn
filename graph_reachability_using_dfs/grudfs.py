def can_reach(arr: list[int], start: int) -> bool:
    n = len(arr)
    stack = [start]
    visited: set[int] = set()

    while stack:
        i = stack.pop()

        if i < 0 or i >= n or i in visited:
            continue

        if arr[i] == 0:
            return True

        visited.add(i)

        stack.append(i + arr[i])
        stack.append(i - arr[i])

    return False


print(can_reach([4, 2, 3, 0, 3, 1, 2], 5))
print(can_reach([4, 2, 3, 0, 3, 1, 2], 0))
print(can_reach([3, 0, 2, 1, 2], 2))
