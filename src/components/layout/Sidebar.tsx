"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Folder,
  MessageSquare,
  Calendar,
  Users,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const nav = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Boards", href: "/boards", icon: Folder },
  { name: "Messages", href: "/messages", icon: MessageSquare, badge: 3 },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Team members", href: "/team", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openBoards, setOpenBoards] = useState(true);

  return (
    <aside className="w-64 border-r bg-white h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="text-xs text-gray-500">workspace</div>
        <div className="flex items-center gap-2 font-medium">
          <img
            src="https://i.pravatar.cc/32?img=20"
            alt="Root folder"
            className="w-6 h-6 rounded-md"
          />
          Root folder
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {nav.slice(0, 2).map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 ${
              pathname === href ? "bg-gray-100 text-gray-900" : "text-gray-700"
            }`}
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        ))}

        <button
          onClick={() => setOpenBoards((v) => !v)}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-700"
        >
          <span className="flex items-center gap-2">
            <Folder size={18} />
            <span>Boards</span>
          </span>
          {openBoards ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        {openBoards && (
          <div className="ml-6 space-y-1 text-sm text-gray-600">
            <div className="px-3 py-1 rounded-lg hover:bg-gray-100 cursor-pointer">
              Create routes
            </div>
            <div className="px-3 py-1 rounded-lg hover:bg-gray-100 cursor-pointer">
              Delepment React App
            </div>
            <Link
              href="/boards"
              className="block px-3 py-1 rounded-lg hover:bg-gray-100 text-blue-600"
            >
              Sport Xi Project
            </Link>
            <div className="px-3 py-1 rounded-lg hover:bg-gray-100 cursor-pointer">
              Wordpress theme
            </div>
          </div>
        )}

        {nav.slice(2).map(({ name, href, icon: Icon, badge }) => (
          <Link
            key={name}
            href={href}
            className={`relative flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 ${
              pathname === href ? "bg-gray-100 text-gray-900" : "text-gray-700"
            }`}
          >
            <Icon size={18} />
            <span>{name}</span>
            {badge && (
              <span className="absolute right-3 text-xs px-2 rounded-full bg-orange-500 text-white">
                {badge}
              </span>
            )}
          </Link>
        ))}

        <div className="mt-auto pt-4">
          <Link
            href="#"
            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-100 text-gray-700"
          >
            Support
          </Link>
          <button className="w-full mt-2 px-3 py-2 rounded-xl bg-gray-900 text-white text-sm">
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
}
