"use client";
import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Swimlane from "./Swimlane";
import TaskCard from "./TaskCard";
import { useTaskStore } from "../store/useTaskStore";
import { RotateCcw } from "lucide-react";
import initialData from "@/../public/tasks.json";
import { Task } from "../types";

const STATUSES = ["todo", "inprogress", "approved", "reject"];

export default function Board() {
  const { tasks, moveTask, searchQuery, restoreTasks } = useTaskStore();
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [overId, setOverId] = useState<string | null>(null);

  // Configure sensors for better drag handling
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require 8px movement before drag starts
      },
    })
  );

  const handleDragStart = (event: any) => {
    const { active } = event;
    const activeId = active.id.replace("drag-", "");
    const task = tasks.find((t) => t.id === activeId);
    if (task) {
      setActiveTask(task);
    }
  };

  const handleDragOver = (event: any) => {
    const { over } = event;
    setOverId(over?.id || null);
  };

  const handleDragEnd = (event: any) => {
    const { over, active } = event;

    if (!over) {
      setActiveTask(null);
      setOverId(null);
      return;
    }

    const activeId = active.id.replace("drag-", "");

    if (over.id.startsWith("task-")) {
      const targetTaskId = over.id.replace("task-", "");
      moveTask(activeId, targetTaskId, "before");
    } else if (over.id.startsWith("swimlane-")) {
      const targetStatus = over.id.replace("swimlane-", "");
      moveTask(activeId, targetStatus, "end");
    } else {
      moveTask(activeId, over.id, "end");
    }

    setActiveTask(null);
    setOverId(null);
  };

  const handleDragCancel = () => {
    setActiveTask(null);
    setOverId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
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
            isOver={overId === status || overId === `swimlane-${status}`}
            activeTaskId={activeTask?.id}
          />
        ))}
      </div>

      <DragOverlay
        modifiers={[restrictToWindowEdges]}
        dropAnimation={{
          duration: 250,
          easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
        }}
      >
        {activeTask ? (
          <div className="opacity-80 transform scale-105 shadow-lg">
            <TaskCard task={activeTask} isDragging={true} />
          </div>
        ) : null}
      </DragOverlay>

      <button
        onClick={() =>
          restoreTasks(
            initialData.map((task) => ({
              ...task,
              status: task.status as
                | "todo"
                | "inprogress"
                | "approved"
                | "reject",
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
