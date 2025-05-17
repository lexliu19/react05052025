const person1 = {
  name: 'Alex',
};

const person2 = {
  name: 'Jane',
  age: 20,
};
const name = 'Josh';
const person3 = { ...person1, ...person2 };
const { name: name1 } = { ...person1 };
console.log(person3);
console.log(name); //Josh
console.log(name1); //Alex

//function
function foo() {
  return 5;
}

console.log(typeof foo); //function
console.log(typeof foo()); //number

function bar() {
  return function foo() {
    return 5;
  };
}
console.log(typeof bar); //function
console.log(typeof bar()); //function

const obj = { a: 1 };
console.log(obj.b); //undefined

console.log([1, 2, 3].forEach === [].forEach); //true; Shared method
console.log(typeof [].forEach); //function

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     this.getSummary = function () {
//       console.log(`${title} by ${authur}`);
//     };
//   }
// }
// const book1 = new Book('book1', 'Jack'); ////created new instance of fn object
// const book2 = new Book('book2', 'Jack'); //created new instance of fn object
// console.log(book1.getSummary === book2.getSummary); //false

//Recommended Practice
// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   //prototype method
//   getSummary() {
//     console.log(`Summary: ${this.title} written by ${this.author}`);
//   }
// }
// const book1 = new Book('book1', 'Jack'); ////created new instance of fn object
// const book2 = new Book('book2', 'Jack'); //created new instance of fn object
// book1.getSummary();

// const getSummaryCopy = book1.getSummary;
// console.log(getSummaryCopy());

Array.prototype.hello = 123;
console.log([].hello);


[1,2,3].