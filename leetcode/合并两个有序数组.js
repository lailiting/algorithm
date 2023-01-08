// 逆向双指针法
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1,p2=n-1,tail = m+n-1;
    let cur = 0
    while(p1 !== -1 || p2 !== -1){
        if(p1 === -1){
            cur=nums2[p2--]
        }else if( p2 === -1){
            cur=nums1[p1--]
        }else if(nums1[p1] > nums2[p2]){
            cur=nums1[p1--]
        }else{
            cur=nums2[p2--]
        }
        nums1[tail--]=cur
    }
    return nums1
};