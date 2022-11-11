/*
1.交换律：a ^ b ^ c  <=> a ^ c ^ b

2.任何数于0异或为任何数 0 ^ n => n

3.相同的数异或为0: n ^ n => 0
*/
var singleNumber = function(nums) {
    let res = 0;
   for(let i = 0; i < nums.length ; ++i ){
       res ^= nums[i];
   }
   return res
};