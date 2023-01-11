var findKthLargest = function(nums, k) {
    let n = nums.length
    let heapSize = n
    maxK(nums)
    // 找到第k个最大的元素，pop出去前k-1个元素
    for(let i = n-1; i >= n-k+1; i--){
        swap(nums, 0, i)
        heapSize--
        myH(nums, 0, heapSize)
    }

    return nums[0]

    // 建立起一个大顶堆
    function maxK(arr){
        let k = Math.floor(n/2)-1
        for(let i = k; i >= 0 ; i--){
            myH(arr, i, n)
        }
    }

    // 维持堆的性质

    function myH(arr, i, heapSize){
        console.log(arr.slice(0,heapSize))
        let left = 2*i+1
        let right = 2*i+2
        let largest = i
        if( left < heapSize && arr[left] > arr[largest]){
            largest=left
        }
        if( right < heapSize && arr[right] > arr[largest]){
            largest=right
        }

        if(largest != i){
            swap(arr, i,largest)
            myH(arr, largest, heapSize)
        }
    }

    // 交换
    function swap(arr, i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
};

findKthLargest([3,2,1,5,6,4],4)