"use client";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { Plus, MoreHorizontal } from "lucide-react";
import { SwimlaneProps } from "../types";

const STATUS_STYLES: Record<string, string> = {
  todo: "bg-gray-100 text-gray-700",
  inprogress: "bg-amber-500 text-white",
  approved: "bg-green-500 text-white",
  reject: "bg-red-500 text-white",
};

const STATUS_LABELS: Record<string, string> = {
  todo: "To Do",
  inprogress: "In Progress",
  approved: "Approved",
  reject: "Reject",
};

export default function Swimlane({ status, tasks, isOver = false, activeTaskId }: SwimlaneProps & { activeTaskId?: string }) {
  const { setNodeRef } = useDroppable({ 
    id: `swimlane-${status}`,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 bg-gray-50 p-4 rounded-xl transition-all duration-200 ${
        isOver ? "ring-2 ring-blue-400 bg-blue-50" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-1 text-sm font-semibold rounded-full ${STATUS_STYLES[status]}`}
          >
            {STATUS_LABELS[status]}
          </span>
          <button className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
            <Plus size={14} />
          </button>
        </div>
        <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="min-h-[200px] space-y-3 transition-all duration-200">
        {tasks.map((task, index: number) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            showDropIndicator={isOver && index === 0}
            isActive={task.id === activeTaskId}
            isOver={isOver}
          />
        ))}
        {tasks.length === 0 && isOver && (
          <div className="min-h-[100px] flex items-center justify-center border-2 border-dashed border-blue-300 rounded-lg bg-blue-50/50 transition-all duration-200">
            <span className="text-blue-500 text-sm">Drop here</span>
          </div>
        )}
      </div>
    </div>
  );
}