const zoom = (n) => {
  if (n === 0) {
    console.log("boom");
    return;
  }

  console.log(n);
  zoom(n - 1);
}

zoom(10);