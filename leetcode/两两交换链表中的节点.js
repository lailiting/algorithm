// 由于交换过程中头节点会发生变化，所以添加一个节点作为头节点，保持头节点不变
// 另外要记录下这个头节点

var swapPairs = function(head) {
    const guding = new ListNode(0)
    guding.next=head
    let temp = guding
    while(temp.next && temp.next.next){
        let node1 = temp.next
        let node2 = temp.next.next
        node1.next = node2.next
        temp.next = node2
        node2.next = node1
        temp=temp.next.next
    }
    return guding.next
};