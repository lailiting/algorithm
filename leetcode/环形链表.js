var hasCycle = function(head) {
    if(!head) return false
    let slow=head,fast=head.next;
    while(fast && fast.next){
        if(slow.next == fast.next.next) return true
        slow=slow.next
        fast=fast.next.next
    }
    return false
};