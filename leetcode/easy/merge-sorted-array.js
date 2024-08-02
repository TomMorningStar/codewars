function merge(nums1, m, nums2, n) {

  const result = [];

  function w(count, arr) {
    let i = 0;
    console.log(count);
    while(i < count) {
      result.push(arr[i]);
      i++
    }
  }

  w(m, nums1)
  w(n, nums2 )


  return result.sort()
};

console.log(merge([1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));
//Output: [1,2,2,3,5,6]
