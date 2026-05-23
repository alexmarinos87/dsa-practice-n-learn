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

console.log(rotateTheBox([['#', '.', '#']]));
console.log(rotateTheBox([
    ['#', '.', '*', '.'],
    ['#', '#', '*', '.'],
]));
