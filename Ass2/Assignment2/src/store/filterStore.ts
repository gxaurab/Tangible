import { create } from 'zustand';
import useTaskStore, { type Task } from './taskStore';

// Define filter types
type FilterType = 'all' | 'completed' | 'incomplete';

// Define counts type
interface TaskCounts {
  total: number;
  completed: number;
  incomplete: number;
}

// Define the FilterStore interface
interface FilterStore {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  filteredTasks: () => Task[];
  taskCounts: () => TaskCounts;
}

const useFilterStore = create<FilterStore>((set, get) => ({
  filter: 'all',
  setFilter: (filter: FilterType) => set({ filter }),
  filteredTasks: () => {
    const tasks = useTaskStore.getState().tasks;
    const { filter } = get();
    if (filter === 'completed') return tasks.filter((task) => task.completed);
    if (filter === 'incomplete') return tasks.filter((task) => !task.completed);
    return tasks;
  },
  taskCounts: () => {
    const tasks = useTaskStore.getState().tasks;
    return {
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      incomplete: tasks.filter((task) => !task.completed).length,
    };
  },
}));

export default useFilterStore;