// 利用快慢指针
// 以为删除的可能是头节点，所以要加一个节点指向头节点

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    first = head
    second = dummy
    for(let i = 0; i < n; i++){
        first=first.next
    }
    while(first){
        second=second.next
        first=first.next
    }
    second.next=second.next.next
    return dummy.next
};