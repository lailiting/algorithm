var exist = function (board, word) {
    let rows = board.length
    let cols = board[0].length
    let visited = []
    for (let i = 0; i < rows; i++) {
        visited.push(new Array(cols).fill(false))
    }
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]

    const dfs = function (i, j, k) {
        if (board[i][j] != word[k]) {
            return false
        }

        if (k === word.length - 1) {
            return true
        }
        visited[i][j] = true
        for (const [dx, dy] of directions) {
            let newi = i + dx,
                newj = j + dy;
            if (newi >= 0 && newi < rows && newj >= 0 && newj < cols && !visited[newi][newj]) {
                const flag = dfs(newi, newj, k + 1)
                if (flag) {
                    return true
                }
            }
        }
        visited[i][j] = false
        return false
    }

    // 查找第一个单词
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == word[0]) {
                const flag = dfs(i, j, 0)
                if (flag) {
                    return true
                }
            }
        }
    }



    return false
};

exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], "ABCB")


var exist = function (board, word) {
    const rows = board.length,
        cols = board[0].length;
    // 方向数组，方便从某一个元素向上下左右找相邻元素扩散
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    // 存储对应索引位上是否已遍历过了
    const visited = new Array(rows)
        .fill(false)
        .map(() => new Array(cols).fill(false));

    const dfs = (i, j, k) => {
        // 矩阵索引位 i j中元素跟要找的字符串元素不相等，就直接返回false
        if (board[i][j] != word.charAt(k)) return false;
        // 前面的都已经匹配成功 k才会增长到字符串的最大长度位
        else if (k == word.length - 1) return true;
        visited[i][j] = true;
        // 从矩阵索引位i j向上下左右遍历查找
        for (const [dx, dy] of directions) {
            let newI = i + dx,
                newJ = j + dy;
            // 在矩阵索引范围内 并且没有访问过
            if (
                newI >= 0 &&
                newI < rows &&
                newJ >= 0 &&
                newJ < cols &&
                !visited[newI][newJ]
            ) {
                // 深度优先搜索
                const flag = dfs(newI, newJ, k + 1);
                if (flag) {
                    return true;
                }
            }
        }
        visited[i][j] = false;
        return false;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == word[0]) {
                // 从矩阵的任一一个元素点开始向四周扩散查找
                const flag = dfs(i, j, 0);
                // 找到了就可以立即返回了
                if (flag) {
                    return true;
                }
            }
        }
    }
    return false;
};