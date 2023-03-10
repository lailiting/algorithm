var subarraySum = function(nums, k) {
    let acc=0,map=new Map(),count=0;
    for(let i=0;i<nums.length;i++){
        acc=acc+nums[i];
        if(acc===k){count++}
        if(map.has(acc-k)){
            count+=map.get(acc-k)
        }
        if(map.has(acc)){
            map.set(acc,map.get(acc)+1)
        }else{
              map.set(acc,1)
        }
    }
    return count
  };
  subarraySum([1,2,3])