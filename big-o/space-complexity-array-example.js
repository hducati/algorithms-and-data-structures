const doubler = (items) => {
  let newArray = [];

  for (let i = 0; i < items.length; i++) {
    newArray.push(items[i]);
    newArray.push(items[i])
  }

  return newArray;
}

doubler(['a', 'b', 'c', 'd', 'e', 'f'])