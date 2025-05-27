import { useState } from 'react';
import Todo from './Todo';
const initialTasks = [
  { id: 1, content: 'Walk dog', isCompleted: false },
  { id: 2, content: 'Water plants!!', isCompleted: true },
  { id: 3, content: 'Grocery Shopping', isCompleted: false },
];

export default function TodoListApp() {
  const [newTodoContent, setNewTodoContent] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  function handleNewTodo() {
    if (newTodoContent.trim() === '') return;
    const newTask = {
      id: Date.now(),
      content: newTodoContent,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setNewTodoContent('');
  }
  function handleDelete(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }
  return (
    <div className="todo-list">
      <h1>TODO APP</h1>
      <div className="add-todo">
        <input
          placeholder="Add New Item..."
          type="text"
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
        />
        <button onClick={handleNewTodo}>ADD</button>
      </div>
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          onDelete={handleDelete}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
}
