import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  FolderKanban,
  CalendarDays,
  Kanban,
  ClipboardMinus,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import ProfileDropdown from "../Sidebar/ProfileDropdown";

const menus = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    title: "Tasks",
    path: "/tasks",
    icon: ClipboardList,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    id: 4,
    title: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    id: 5,
    title: "Kanban",
    path: "/kanban",
    icon: Kanban,
  },
  {
    id: 6,
    title: "Reports",
    path: "/reports",
    icon: ClipboardMinus,
  },
  {
    id: 7,
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full relative bg-white w-full">

      {/* Logo */}
      <div className="h-[100px] flex items-center px-8">
        <h1 className="text-4xl font-bold">Taskify</h1>
      </div>

      {/* Menu */}
      <div className="px-6 flex-1">
        <ul className="flex flex-col gap-2">

          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-[14px] rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[#f0f8f2] text-[#59a875] font-semibold"
                        : "text-gray-500 hover:bg-[#f0f8f2] hover:text-[#59a875]"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{menu.title}</span>
                </NavLink>
              </li>
            );
          })}

        </ul>
      </div>

      {/* Profile */}
      <ProfileDropdown />
    </div>
  );
};

export default Sidebar;