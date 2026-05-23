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
