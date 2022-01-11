// O(n) where n is the length of the input array

const calculateAverage = (numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    sum += number;
  }

  return sum / numbers.length;
};

console.log(calculateAverage([2, 3, 4, 1]));