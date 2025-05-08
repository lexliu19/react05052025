//Reference Type VS Primitive type
const a = 1;
// a = 2; error: cannot re assign values to const variable
console.log(a);

let b = 1;
c = b;
console.log('c= ', c); //1
c = 2;
console.log('c= ', c); //2
console.log('b= ', b); //1

// Reference Type
const arr = [1, 2, 3];
let arr1 = arr;

arr1 = [4, 5, 6];
arr1[0] = 1000;

console.log(arr);
console.log(arr1);
