import React, { useState } from 'react';
import useTaskStore from '../store/taskStore';
import useFilterStore from '../store/filterStore';

const Influence: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const { addTask, toggleTask } = useTaskStore();
  const { filter, setFilter, filteredTasks, taskCounts } = useFilterStore();

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Task Manager</h1>

      {/* Add Task */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Filter Buttons */}
      <div style={{ margin: '20px 0' }}>
        <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
          All
        </button>
        <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
          Completed
        </button>
        <button onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>
          Incomplete
        </button>
      </div>

      {/* Task Counts */}
      <div>
        <p>Total Tasks: {taskCounts().total}</p>
        <p>Completed: {taskCounts().completed}</p>
        <p>Incomplete: {taskCounts().incomplete}</p>
      </div>

      {/* Task List */}
      <ul>
        {filteredTasks().map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Influence;