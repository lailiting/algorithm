var mergeTwoLists = function (list1, list2) {
    let newList = new ListNode()
    let head = newList
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            head.next = list1
            list1 = list1.next
        } else {
            head.next = list2
            list2 = list2.next
        }
        head = head.next
    }
    head.next = list1 === null ? list2 : list1
    return newList.next
 
};