let nums = [2,7,8,9,10,13,17,19,21]

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return false;
  
  let mid = Math.floor((left + right) / 2);

  if (target === array[mid]) return mid;

  if (target < array[mid]) return binarySearchHelper(array, target, left, mid - 1)

  return binarySearchHelper(array, target, mid + 1, right)
}

console.log(binarySearch(nums, 7))
console.log(binarySearch(nums, 15))
