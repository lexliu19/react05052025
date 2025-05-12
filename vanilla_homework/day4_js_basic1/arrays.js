// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  return !isNaN(Number(str));
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let num of arr) {
    if (typeof num === 'string') num = Number(num);
    if (isNaN(num)) num = 0;
    sum += num;
  }
  return sum / arr.length;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  if (people.length === 0) return 0;
  let ageSum = 0;
  for (const person of people) {
    ageSum += person.age;
  }
  return ageSum / people.length;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  if (people.length === 0) return 0;
  let ageSum = 0,
    count = 0;
  for (const person of people) {
    if (person.job === job && person.age) {
      count++;
      ageSum += person.age;
    }
  }
  if (count === 0) return 0;

  return ageSum / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (arr.length === 0) return 0;
  let max = -Infinity;
  for (const num of arr) {
    if (num > max) max = num;
  }
  return max;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';

  const words = str.split(' ');
  let longestWord = '';
  for (const word of words) {
    if (word.length > longestWord.length) longestWord = word;
  }
  return longestWord;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]

  const evenNumbers = [];
  for (const num of arr) {
    if (num % 2 === 0) evenNumbers.push(num);
  }
  return evenNumbers;
}

// reference types
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]

  const n = num.length;
  const res = [...num];
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        [res[j], res[j + 1]] = [res[j + 1], res[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return res;
}

export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  const n = num.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (num[j] > num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return num;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]

  const res = [];
  for (const ele of arr) {
    if (typeof ele !== typeToRemove) {
      res.push(ele);
    }
  }
  return res;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]

  return nums.map((num) => {
    switch (operator) {
      case '+':
        return num + amount;
      case '-':
        return num - amount;
      case '*':
        return num * amount;
      case '/':
        return num / amount;
      default:
        throw new Error(`Unsupported operator: ${operator}`);
    }
  });
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]

  const res = [];
  for (const n of nums) {
    if (n !== num) res.push(n);
  }
  return res;
}
