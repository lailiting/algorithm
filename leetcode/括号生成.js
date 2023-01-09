// 括号生成有两个条件
// 1.任意位置左括号数量>=右括号数量
// 2.最后左括号数量=右括号数量

var generateParenthesis = function(n) {
    let strs = [] 
    const dfs =function (Rremain, Lremain, stra){
        if(Rremain == 0){
            strs.push(stra)
            return
        }
        if(Lremain > 0){
            dfs(Rremain, Lremain-1,stra+"(")
        }
        if(Rremain > Lremain){
            dfs(Rremain -1, Lremain, stra+")")
        }
    }
    dfs(n,n,"")
    return strs
};