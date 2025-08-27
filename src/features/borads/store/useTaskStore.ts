import { create } from "zustand";

type Task = {
  category: string;
  id: string;
  title: string;
  status: "todo" | "inprogress" | "approved" | "reject";
};

type Store = {
  tasks: Task[];
  searchQuery: string;
  loadTasks: (data: Task[]) => void;
  moveTask: (taskId: string, targetId: string, position: 'before' | 'end') => void;
  setSearchQuery: (query: string) => void;
  restoreTasks: (newTasks: Task[]) => void;
};

export const useTaskStore = create<Store>((set) => ({
  tasks: [],
  searchQuery: "",

  loadTasks: (data) => {
    const saved = localStorage.getItem("tasks");
    set({ tasks: saved ? JSON.parse(saved) : data });
  },

  moveTask: (taskId, targetId, position = "end") =>
    set((state) => {
      const task = state.tasks.find((t) => t.id === taskId);
      if (!task) return state;

      let newTasks = state.tasks.filter((t) => t.id !== taskId);

      if (position === "end") {
        task.status = targetId as Task["status"];
        newTasks.push(task);
      } else if (position === "before") {
        const targetIndex = newTasks.findIndex((t) => t.id === targetId);
        if (targetIndex !== -1) {
          task.status = newTasks[targetIndex].status;
          newTasks.splice(targetIndex, 0, task);
        }
      }

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return { tasks: newTasks };
    }),

  setSearchQuery: (q) => set({ searchQuery: q }),

  restoreTasks: (data) =>
    set(() => {
      localStorage.removeItem("tasks");
      localStorage.setItem("tasks", JSON.stringify(data));
      return { tasks: data };
    }),
}));
