def rotate_the_box(box_grid: list[list[str]]) -> list[list[str]]:
    m = len(box_grid)
    n = len(box_grid[0])

    for row in range(m):
        empty_col = n - 1

        for col in range(n - 1, -1, -1):
            if box_grid[row][col] == "*":
                empty_col = col - 1
            elif box_grid[row][col] == "#":
                box_grid[row][col] = "."
                box_grid[row][empty_col] = "#"
                empty_col -= 1

    rotated: list[list[str]] = [["." for _ in range(m)] for _ in range(n)]

    for row in range(m):
        for col in range(n):
            rotated[col][m - 1 - row] = box_grid[row][col]

    return rotated


print(rotate_the_box([["#", ".", "#"]]))
print(
    rotate_the_box(
        [
            ["#", ".", "*", "."],
            ["#", "#", "*", "."],
        ]
    )
)
