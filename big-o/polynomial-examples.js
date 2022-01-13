const bar = (str) => {
  if (str.length === 0 ) return;

  const firstChar = str[0];
  const rest = str.slice(1);
  console.log(firstChar);

  bar(rest);
}

bar("example");