"use client";
import { DndContext } from "@dnd-kit/core";
import Swimlane from "./Swimlane";
import { useTaskStore } from "../store/useTaskStore";
import { RotateCcw } from "lucide-react";

import initialData from "@/../public/tasks.json";

const STATUSES = ["todo", "inprogress", "approved", "reject"];

export default function Board() {
  const { tasks, moveTask, searchQuery, restoreTasks } = useTaskStore();

  const handleDragEnd = (event: any) => {
    const { over, active } = event;
    if (!over) return;

    const activeId = active.id.replace("drag-", "");

    if (over.id.startsWith("task-")) {
      const targetTaskId = over.id.replace("task-", "");
      moveTask(activeId, targetTaskId, "before");
    } else {
      moveTask(activeId, over.id, "end");
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-4 gap-4">
        {STATUSES.map((status) => (
          <Swimlane
            key={status}
            status={status}
            tasks={tasks.filter(
              (t) =>
                t.status === status &&
                t.title.toLowerCase().includes(searchQuery.toLowerCase())
            )}
          />
        ))}
      </div>

      <button
        onClick={() =>
          restoreTasks(
            initialData.map((task) => ({
              ...task,
              status: task.status as "todo" | "inprogress" | "approved" | "reject",
            }))
          )
        }
        className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <RotateCcw size={18} />
        Restore Data
      </button>
    </DndContext>
  );
}
