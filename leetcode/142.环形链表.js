// 利用环形链表特性 2(x+y)
// 一定会在慢指针第一圈的时候相遇
// 因为快指针先进的圈 快是慢的两倍


var detectCycle = function(head) {
    let slow = head, fast = head;
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        if(slow == fast){
            slow = head
            while(slow != fast){
                slow=slow.next
                fast=fast.next
            }
            return slow
        }
    }
    return null
};