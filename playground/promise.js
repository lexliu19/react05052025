const todoAPI = 'https://jsonplaceholder.typicode.com/todos/1';
const singleTodoBaseUrl = 'https://jsonplaceholder.typicode.com/posts/';
// Promise-Based
const fetchTodo = (apiUrl) => {
  return fetch(apiUrl).then((res) => {
    if (!res.ok) throw new Error('Error!');
    return res.json();
  });
};

fetchTodo(todoAPI)
  .then((todo) => console.log(todo))
  .catch((err) => console.log(err));

// aysnc await:
const fetchSpecificTodo = async (todoIdx) => {
  const res = await fetch(`${singleTodoBaseUrl}${todoIdx}`);
  return res.json();
};
const firstTodo = await fetchSpecificTodo(1);
console.log(firstTodo.title);

// PromiseAll:
const p1 = fetch('xxxx').then((res) => {
  if (!res.ok) throw new Error('p1 failed');
  return res.json();
});

const p2 = fetch(`${singleTodoBaseUrl}2`).then((res) => {
  if (!res.ok) throw new Error('p2 failed');
  return res.json();
});
Promise.all([p1, p2])
  .then(([todo1, todo2]) => {
    console.log('Todos come from Promise.all case:');
    console.log(todo1, todo2.id);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.any([p1, p2])
  .then((todo) => {
    console.log('One of them succeeded:', todo);
  })
  .catch((err) => {
    console.error('All failed:', err);
  });
