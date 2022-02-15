const combinations = (elements) => {
  if ( elements.length === 0 ) return [ [] ];

  const firstElement = elements[0];
  const rest = elements.slice(1);

  const combsWithoutFirst = combinations(rest);
  const combsWithFirst = [];

  combsWithoutFirst.forEach(comb => {
    const combWithFirst = [...comb, firstElement]
    combsWithFirst.push(combWithFirst)
  });

  return [ ...combsWithoutFirst, ...combsWithFirst]
}

console.log(combinations(['a', 'b', 'c']))