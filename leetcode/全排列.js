var swap=function(nums,i,j){
    let temp = nums[i]
    nums[i]=nums[j]
    nums[j]=temp
}

var backp = function(nums,first,n,res){
    if(first==n){
        res.push(nums.slice())
    }else{
        for(let i = first;i<n;i++){
            swap(nums,first,i)
            backp(nums,first+1,n,res)
            swap(nums,i,first)
        }
    }
}
var permute = function(nums) {
    let res=[]
    let n = nums.length
    backp(nums,0,n,res)
    return res
};
permute([1,2,3])