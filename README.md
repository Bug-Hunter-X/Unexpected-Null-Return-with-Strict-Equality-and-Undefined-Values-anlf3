# Unexpected Null Return with Strict Equality and Undefined Values

This repository demonstrates a subtle bug in JavaScript related to handling null and undefined values using strict equality. The `foo` function intends to add two numbers but returns null if either input is null. However, it fails to handle the case where an input is `undefined`, leading to unexpected null returns. 

The `bug.js` file shows the buggy implementation, while `bugSolution.js` provides a corrected version.