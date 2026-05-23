# Problem

You are given a grid that represents a side view of a box.

Each cell contains one of three characters:

```text
# = stone
* = obstacle
. = empty space
```

The box is rotated 90 degrees clockwise. After the rotation, stones fall because of gravity.

Return the final rotated grid.

# Input and output

Input:
An `m x n` character grid.

Output:
An `n x m` character grid after rotation and gravity.

# Example 1

```text
boxGrid = [["#", ".", "#"]]
```

output:

```text
[["."],
 ["#"],
 ["#"]]
```

# Example 2

```text
boxGrid = [["#", ".", "*", "."],
           ["#", "#", "*", "."]]
```

output:

```text
[["#", "."],
 ["#", "#"],
 ["*", "*"],
 [".", "."]]
```

# Key idea

After a clockwise rotation, movement to the right in the original grid becomes movement downward in the rotated grid.

So instead of rotating first and then making stones fall down, we can do this:

```text
simulate gravity to the right
rotate clockwise
```

This makes the gravity step easier because each row can be handled independently.

# Gravity step

For each row, scan from right to left.

Keep a pointer called `emptyCol`.

`emptyCol` means:

```text
the rightmost empty position where the next stone can fall
```

Rules:

```text
. = ignore
# = move this stone to emptyCol, then move emptyCol left
* = obstacle, so stones on the left cannot pass it
```

When we see an obstacle:

```text
emptyCol = obstacle column - 1
```

# Rotation step

The rotated grid has size:

```text
n x m
```

The clockwise rotation mapping is:

```text
original[row][col] -> rotated[col][m - 1 - row]
```

# English algorithm

For every row:

Start `emptyCol` at the last column.

Scan the row from right to left.

If the current cell is an obstacle, move `emptyCol` to the cell just before the obstacle.

If the current cell is a stone:

Set the current cell to empty.

Place the stone at `emptyCol`.

Move `emptyCol` one step left.

After all rows have been settled, create a new `n x m` matrix.

Copy each original cell into its rotated position.

Return the rotated matrix.

# Pseudocode

```text
function rotateTheBox(boxGrid):
    m = number of rows
    n = number of columns

    for row from 0 to m - 1:
        emptyCol = n - 1

        for col from n - 1 down to 0:
            if boxGrid[row][col] is obstacle:
                emptyCol = col - 1
            else if boxGrid[row][col] is stone:
                boxGrid[row][col] = empty
                boxGrid[row][emptyCol] = stone
                emptyCol = emptyCol - 1

    rotated = new grid with n rows and m columns

    for row from 0 to m - 1:
        for col from 0 to n - 1:
            rotated[col][m - 1 - row] = boxGrid[row][col]

    return rotated
```

# Python

```python
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
```

# TypeScript

```typescript
function rotateTheBox(boxGrid: string[][]): string[][] {
    const m = boxGrid.length;
    const n = boxGrid[0].length;

    for (let row = 0; row < m; row++) {
        let emptyCol = n - 1;

        for (let col = n - 1; col >= 0; col--) {
            if (boxGrid[row][col] === '*') {
                emptyCol = col - 1;
            } else if (boxGrid[row][col] === '#') {
                boxGrid[row][col] = '.';
                boxGrid[row][emptyCol] = '#';
                emptyCol--;
            }
        }
    }

    const rotated: string[][] = Array.from({ length: n }, () => Array(m).fill('.'));

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            rotated[col][m - 1 - row] = boxGrid[row][col];
        }
    }

    return rotated;
}
```

# Java

```java
class Solution {
    public char[][] rotateTheBox(char[][] boxGrid) {
        int m = boxGrid.length;
        int n = boxGrid[0].length;

        for (int row = 0; row < m; row++) {
            int emptyCol = n - 1;

            for (int col = n - 1; col >= 0; col--) {
                if (boxGrid[row][col] == '*') {
                    emptyCol = col - 1;
                } else if (boxGrid[row][col] == '#') {
                    boxGrid[row][col] = '.';
                    boxGrid[row][emptyCol] = '#';
                    emptyCol--;
                }
            }
        }

        char[][] rotated = new char[n][m];

        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                rotated[col][m - 1 - row] = boxGrid[row][col];
            }
        }

        return rotated;
    }
}
```

# Why this works

Clockwise rotation turns original-right into rotated-down.

The first pass puts every stone as far right as it can go within its obstacle-bounded section.

After the clockwise rotation, those right-shifted stones appear as stones that have fallen as far down as possible.

Obstacles are safe because they reset `emptyCol`, so stones never move across them.

# Time and space complexity

Let `m` be the number of rows and `n` be the number of columns.

# Time complexity

O(m * n)

The gravity pass touches every cell once, and the rotation pass touches every cell once.

# Space complexity

O(m * n)

The rotated output grid has `n * m` cells.

Extra working space besides the output is O(1).
