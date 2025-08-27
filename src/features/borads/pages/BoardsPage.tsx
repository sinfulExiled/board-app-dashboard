"use client";
import { useEffect } from "react";
import Board from "../components/Board";
import { useTaskStore } from "../store/useTaskStore";

export default function BoardsPage() {
  const { loadTasks, setSearchQuery } = useTaskStore();

  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => loadTasks(data));
  }, [loadTasks]);

  return (
    <div className="p-6 space-y-4">
      <input
        placeholder="Search tasks..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded-md"
      />
      <Board />
    </div>
  );
}
