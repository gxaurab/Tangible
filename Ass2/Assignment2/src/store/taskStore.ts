import { create } from 'zustand';

// Define the Task type
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define the TaskStore interface
interface TaskStore {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build Zustand store', completed: true },
    { id: 3, title: 'Write code', completed: false },
  ],
  addTask: (title: string) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), title, completed: false }],
    })),
  toggleTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
}));

export default useTaskStore;