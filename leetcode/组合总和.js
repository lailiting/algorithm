// 回溯加剪枝
// dfs算法

var combinationSum = function(candidates, target) {
    const n = candidates.length
    const result = []
   const dfs =function (remain, item, index){
       if(index == n){
           return
       }
       if(remain == 0){
           result.push(item)
           return
       }

    //    不选择
    dfs(remain, item, index+1)
    // 可以选择
    if(remain - candidates[index] >= 0){
        dfs(remain - candidates[index], [...item, candidates[index]], index)
    }
   }

   dfs(target,[], 0)
   return result
};