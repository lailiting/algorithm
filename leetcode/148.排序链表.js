//  先分割
var splithead = function(head, tail){
    if(head === null){
        return head
    }
    if(head.next === tail){
        head.next = null
        return head
    }
    let slow = head, fast = head
    while(fast !== tail){
        slow = slow.next
        fast = fast.next
        if(fast !== tail){
            fast = fast.next
        }
    }
    let mid = slow
    return merge(splithead(head, mid), splithead(mid, tail))
}

// 再合并
var merge = function(temp1, temp2){
    let newhead = new ListNode()
    let temp = newhead
    while(temp1 && temp2){
        if(temp1.val <= temp2.val){
            temp.next = temp1
            temp1 = temp1.next
        }else{
            temp.next = temp2
            temp2 = temp2.next
        }
        temp = temp.next
    }
    temp.next = temp1 === null ? temp2 : temp1
    return newhead.next
}

var sortList = function(head) {
    return splithead(head, null)
};