/**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).**/

function findMedianSortedArrays(nums1, nums2) {
  const merged = mergeSortedArrays(nums1, nums2);
  const len = merged.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (merged[mid] + merged[mid - 1]) / 2;
  } else {
    return merged[mid];
  }
}

function mergeSortedArrays(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  return merged;
}

console.log(findMedianSortedArrays([1,2], [3,4]))//Output: 2.5
