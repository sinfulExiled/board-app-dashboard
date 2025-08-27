"use client";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";
import { Plus, MoreHorizontal } from "lucide-react";

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

export default function Swimlane({ status, tasks }: any) {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div className="flex-1 bg-gray-50 p-4 rounded-xl">
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

      <div ref={setNodeRef} className="min-h-[200px] space-y-3">
        {tasks.map((task: any) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
