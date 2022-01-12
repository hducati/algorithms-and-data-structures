const bar = (str) => {
  console.log(str);
  if (str.length <= 1) return;

  const midIdx = Math.floor(str.length / 2);
  bar(str.slice(0, midIdx));
}

bar("abcdefghijklmnopqrstuvwxyz");