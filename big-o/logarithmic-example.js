const foo = (number) => {
  if (n <= 1) {
    console.log("hooray");
    return;
  }

  console.log(n);
  foo( n / 2);
}

foo(30);