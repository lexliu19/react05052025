export default function Todo({ task, onDelete, toggleCompleted }) {
  return (
    <div className="task">
      <div>
        <input
          type="checkbox"
          name="completed"
          id="task-isCompleted"
          checked={task.isCompleted}
          onChange={(e) => toggleCompleted(task.id)}
        />
        <span className={task.isCompleted ? 'todo-completed' : ''}>
          {task.content}
        </span>
      </div>

      <div className="task-buttons">
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
