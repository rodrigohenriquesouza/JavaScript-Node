const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]
//const juntaNums = nums1.concat(nums2, [7, 8, 9], 'Rodrigo')
// ... rest -> ... spread
const juntaNums = [...nums1, 'Rodrigo', ...nums2, ...[7, 8 ,9]]

console.log(juntaNums)