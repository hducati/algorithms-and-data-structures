const unique = (array) => {
  const onlyUniques = new Set();

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    onlyUniques.add(element);
  }

  return onlyUniques;
}

console.log(unique(['cat', 'dog', 'bark', 'cat', 'example', 'arr']));