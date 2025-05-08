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

// Hoisting
let name;
console.log(name); //undefined: declared, no value assigned;

// console.log(age); //Error: Cannot access 'age' before initialization
let age = 5;

console.log(location); //undefined: Can be used before declaration (but value is undefined)
var location = 'D.C';

// Reference Type Comparison

const nums = [1, 2, 3];
let nums1 = nums;
console.log(nums == nums1); //true
console.log(nums === nums1); //true

const nums2 = [1, 2, 3];
console.log(nums == nums2); //false
console.log(nums === nums2); //false

// Primitive type Comparison
const str = '1';
console.log(str == 1); // true; Coercion
console.log(str === 1); // false; Strict Compare: Different Types!
