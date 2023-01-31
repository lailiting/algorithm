// dfs深度优先遍历，碰到为1的数量加1然后把他周围的全部陆地变成1

var numIslands = function(grid) {
    const dx = [-1, 1, 0,0], dy = [0,0,-1,1];
    const xl = grid.length,yl=grid[0].length
    let n = 0
    for(let i = 0; i < xl; i++){
        for(let j = 0; j < yl; j++){
            if(grid[i][j] === '1'){
                dfs(i,j)
                n++
            }
        }
    }

    function dfs(x,y){
        grid[x][y] = '0'
        for(let i = 0; i<4; i++){
            let nx = x + dx[i], ny=y+dy[i];
            if(nx >= 0 && nx <xl && ny >= 0 &&ny <yl && grid[nx][ny] === '1'){
                dfs(nx,ny)
            }
        }
    }
    return n
};