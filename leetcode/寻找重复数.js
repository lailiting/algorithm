// 此方法利用环形链表的性质,在第一次相遇后，快指针从0开始，每次走一步，慢指针还是原来的走法，最后会
//在环开始的位置相遇
// 为什么这是个环呢，因为题目是数组，我们将链表的指针next看成下标对应的value
// 如果有重复的数，则说明存在环

var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    do{
        slow = nums[slow]
        fast = nums[nums[fast]]
        console.log(slow,fast)
    }while(slow != fast)
    fast = 0
    while(slow != fast){
        slow = nums[slow]
        fast = nums[fast]
        console.log(slow,fast)
    }
    return slow
};

findDuplicate([1,3,4,2,2])