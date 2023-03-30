#Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
#The overall run time complexity should be O(log (m+n)).

def findMedianSortedArrays(nums1, nums2):
    merged = mergeSortedArrays(nums1, nums2)
    length = len(merged)
    mid = length // 2

    if length % 2 == 0:
        return (merged[mid] + merged[mid - 1]) / 2
    else:
        return merged[mid]

def mergeSortedArrays(nums1, nums2):
    merged = []
    i = 0
    j = 0

    while i < len(nums1) and j < len(nums2):
        if nums1[i] <= nums2[j]:
            merged.append(nums1[i])
            i += 1
        else:
            merged.append(nums2[j])
            j += 1

    while i < len(nums1):
        merged.append(nums1[i])
        i += 1

    while j < len(nums2):
        merged.append(nums2[j])
        j += 1

    return merged

print(findMedianSortedArrays([1,3], [2]))
