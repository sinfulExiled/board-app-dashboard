"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { MoreHorizontal } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  design: "bg-red-500",
  feedback: "bg-blue-500",
  research: "bg-green-500",
  other: "bg-gray-400",
  presentation: "bg-orange-500",
  interface: "bg-purple-500",
  ux: "bg-yellow-500",
};

export default function TaskCard({ task }: { task: any }) {
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
  } = useDraggable({ id: `drag-${task.id}` });

  const { setNodeRef: setDropRef } = useDroppable({
    id: `task-${task.id}`,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div ref={setDropRef} className="mb-3">
      <div
        ref={setDragRef}
        {...listeners}
        {...attributes}
        style={style}
        className="p-3 rounded-xl bg-white shadow-sm border border-gray-100 cursor-grab"
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`px-2 py-0.5 text-xs font-medium text-white rounded-md ${
              CATEGORY_COLORS[task.category] || "bg-gray-400"
            }`}
          >
            {task.category}
          </span>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={16} />
          </button>
        </div>

        <h4 className="font-semibold text-gray-800 mb-2">{task.title}</h4>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 flex-wrap">
          {task.priority && (
            <span className="px-2 py-0.5 rounded-full bg-gray-100">
              {task.priority}
            </span>
          )}
          {task.dueDate && (
            <span className="px-2 py-0.5 rounded-full bg-gray-100">
              Due: {task.dueDate}
            </span>
          )}
          {task.reports > 0 && (
            <span className="flex items-center gap-1 text-red-500 font-medium">
              ⚠ {task.reports} Reports
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {task.assigned?.map((user: any) => (
              <img
                key={user.id}
                src={user.avatar}
                alt={user.name}
                className="w-7 h-7 rounded-full border-2 border-white"
              />
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>💬 {task.comments || 0}</span>
            <span>📎 {task.attachments || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
