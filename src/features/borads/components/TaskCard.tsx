"use client";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { MoreHorizontal } from "lucide-react";
import { TaskCardProps } from "../types";

const CATEGORY_COLORS: Record<string, string> = {
  design: "bg-red-500",
  feedback: "bg-blue-500",
  research: "bg-green-500",
  other: "bg-gray-400",
  presentation: "bg-orange-500",
  interface: "bg-purple-500",
  ux: "bg-yellow-500",
};

export default function TaskCard({
  task,
  showDropIndicator = false,
  isActive = false,
  isOver = false,
}: TaskCardProps & { isActive?: boolean; isOver?: boolean }) {
  const {
    attributes,
    listeners,
    setNodeRef: setDragRef,
    transform,
    isDragging,
  } = useDraggable({ id: `drag-${task.id}` });

  const { setNodeRef: setDropRef, isOver: isTaskOver } = useDroppable({
    id: `task-${task.id}`,
  });

  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        transition: isDragging ? "none" : "transform 0.2s ease",
      }
    : undefined;

  // Calculate space-giving animation
  const getSpaceAnimation = () => {
    if (isTaskOver) {
      return "translate-y-8"; // Move down to make space
    }
    if (isOver && !isActive) {
      return "scale-95 opacity-80"; // Slightly shrink and fade
    }
    return "";
  };

  return (
    <div className="relative">
      {/* Drop indicator above the task */}
      {showDropIndicator && (
        <div className="absolute -top-2 left-0 right-0 h-1 bg-blue-400 rounded-full z-10 animate-pulse" />
      )}

      <div
        ref={setDropRef}
        className={`mb-3 transition-all duration-300 ease-in-out ${getSpaceAnimation()}`}
      >
        <div
          ref={setDragRef}
          {...listeners}
          {...attributes}
          style={style}
          className={`p-3 rounded-xl bg-white shadow-sm border border-gray-100 cursor-grab transition-all duration-300 ${
            isDragging ? "opacity-20 scale-95 shadow-lg" : ""
          } ${
            isTaskOver ? "border-2 border-blue-400 bg-blue-50 scale-105" : ""
          } ${isOver && !isActive ? "opacity-70" : ""}`}
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
            {task.reports && task.reports > 0 && (
              <span className="flex items-center gap-1 text-red-500 font-medium">
                ⚠ {task.reports} Reports
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              {task.assigned?.map((user) => (
                <img
                  key={user.id}
                  src={user.avatar}
                  alt={user.name}
                  className="w-7 h-7 rounded-full border-2 border-white transition-transform duration-300 hover:scale-110"
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

      {/* Drop indicator below the task */}
      {isTaskOver && (
        <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-400 rounded-full z-10 animate-pulse" />
      )}
    </div>
  );
}
