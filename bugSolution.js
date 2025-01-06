function foo(a, b) {
  // Handle undefined values
  a = a === undefined ? 0 : a;
  b = b === undefined ? 0 : b;  
  if (a === null || b === null) {
    return null; 
  }
  return a + b; 
}

console.log(foo(undefined, 1)); // Output: 1
console.log(foo(1, undefined)); // Output: 1
console.log(foo(null, null)); // Output: null
console.log(foo(1,2)); // Output: 3