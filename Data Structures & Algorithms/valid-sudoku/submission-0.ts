class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < 9; i++) {
            let s = new Set();
            for (let j = 0; j < 9; j++) {
                if (s.has(board[i][j])) return false;
                else if (board[i][j] !== ".")
                    s.add(board[i][j]);
                else continue
            }
        }

        for (let i = 0; i < 9; i++) {
            let s = new Set();
            for (let j = 0; j < 9; j++) {
                if (s.has(board[j][i])) return false;
                else if (board[j][i] !== ".")
                    s.add(board[j][i]);
                else continue
            }
        }

        for (let i = 0; i < 9; i++) {
            let s = new Set();
            const startRow = Math.floor(i / 3) * 3;
            const startCol = (i % 3) * 3;
            for(let j=0; j<3; j++){
                for(let k=0; k<3; k++){
                    let row = startRow + j
                    let col = startCol + k
                    if(s.has(board[row][col])) return false
                    else if (board[row][col] !== ".")
                        s.add(board[row][col])
                    else continue
                }
            }
        }

        return true;
    }
}
