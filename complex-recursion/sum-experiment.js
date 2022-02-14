const slowSum = (array) => {
  if (array.length === 0) return 0;

  const rest = array.slice(1)

  return array[0] + slowSum(rest)
}

const fastSum = (array) => {
  return helperSum(array, 0)
}

const helperSum = (array, index) => {
  if (array.length === index) return 0;

  return array[index] + helperSum(array, index + 1)
}




const input = new Array(9000).fill(1)

const slowStart = Date.now();
console.log(slowSum(input))
const slowEnd = Date.now()

console.log(`Slow sum ending in ${slowEnd - slowStart}ms`)

const fastStart = Date.now();
console.log(fastSum(input))
const fastEnd = Date.now()

console.log(`Slow sum ending in ${fastEnd - fastStart}ms`)