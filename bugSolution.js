function foo(a) {
  if (a === null) {
    return 0; 
  } else if (a === undefined) {
    return 0; // or throw an error: throw new Error('Input cannot be undefined');
  }
  return a + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0