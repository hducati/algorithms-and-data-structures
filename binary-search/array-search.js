let nums = [2,7,8,9,10,13,17,19,21]

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while(left < right) {
    let mid = Math.floor((left + right) / 2);

    if (target === array[mid]) return mid;

    if (target < array[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return false;
}

console.log(binarySearch(nums, 7))
console.log(binarySearch(nums, 15))
