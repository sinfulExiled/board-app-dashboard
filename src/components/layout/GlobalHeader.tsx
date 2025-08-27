"use client";
import { Search, Plus, Settings2, Bell } from "lucide-react";

export default function GlobalHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-3 border-b bg-white">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
        <span className="font-semibold text-gray-800">
          Board <span className="text-blue-600">App</span>
        </span>
      </div>

      <div className="flex items-center gap-3 flex-1 justify-center">
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-1">
          Create new board <Plus size={16} />
        </button>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search tasks ..."
            className="w-full pl-8 pr-3 py-1.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <Settings2 size={18} className="text-gray-600" />
        </button>
        <button className="p-2 rounded-lg hover:bg-gray-100 relative">
          <Bell size={18} className="text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="https://i.pravatar.cc/32?img=11"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
