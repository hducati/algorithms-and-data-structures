const sum = (array) => {
  console.log("Running sum 1")
  if (array.length === 0) return 0;

  const rest = array.slice(1)

  return array[0] + sum(rest)
}

console.log(sum([1, 5, 7, -2]))

const sum_2 = (array) => {
  console.log("Running sum 2")
  return _sum(array, 0)
}

const _sum = (array, idx) => {
  if (idx === array.length) return 0;
  return array[idx] + _sum(array, idx + 1)
}

console.log(sum_2([1, 5, 7, -2]))