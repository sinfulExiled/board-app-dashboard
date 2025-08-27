import React from "react";

interface TopbarProps {
  title?: string;
  status?: string;
  subtitle?: string;
  assigned?: { id: number; name: string; avatar: string }[];
  rightContent?: React.ReactNode;
  lastUpdated?: string;
}

const Topbar: React.FC<TopbarProps> = ({
  title = "Sport Xi Project",
  status = "In progress",
  subtitle = "event production",
  assigned = [
    { id: 1, name: "Alice", avatar: "https://i.pravatar.cc/32?img=1" },
    { id: 2, name: "Bob", avatar: "https://i.pravatar.cc/32?img=2" },
    { id: 3, name: "Charlie", avatar: "https://i.pravatar.cc/32?img=3" },
  ],
  lastUpdated = "04 April, 2022",
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold">{title}</h1>
          <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md">
            {status}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-1">
        <div>
          <p className="text-sm text-gray-500">{subtitle}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex -space-x-2">
              {assigned.map((user) => (
                <img
                  key={user.id}
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
              <span className="flex items-center justify-center w-8 h-8 text-xs font-medium text-gray-600 bg-gray-200 rounded-full border-2 border-white">
                +2
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Last updated on: {lastUpdated}
      </p>
    </header>
  );
};

export default Topbar;
