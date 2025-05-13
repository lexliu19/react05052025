const people = {
  1: { name: 'Alice', age: 25 },
  2: { name: 'Bob', age: 30 },
  3: { name: 'Charlie', age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  let sum = 0;
  let count = 0;
  for (const [id, person] of Object.entries(people)) {
    count++;
    sum += person.age;
  }
  if (count == 0) return 0;
  return sum / count;
};
