// 回溯法

var combine = function(n, k) {
    let result = []
    const dfs =function (cur, n, k, temp){
        if(temp.length + (n-cur+1) < k){
            return
        }
        if(temp.length == k){
            result.push(temp)
            return
        }

        dfs(cur+1, n, k, [...temp,cur])
        dfs(cur+1, n, k, temp)
    }

    dfs(1,n,k,[])
    return result
};