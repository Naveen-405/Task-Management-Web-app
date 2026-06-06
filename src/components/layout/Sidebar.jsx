import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  FolderKanban,
  CalendarDays,
  Kanban,
  ClipboardMinus,
  Settings,
  ChevronDown
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <aside className="bg-white w-[15%] h-screen">
        <div className="flex flex-col relative h-full">
          <div className="logo-wrapper h-[100px] p-[24px] font-semibold ms-3 w-full">
            <h1 className="text-[36px]">Taskify</h1>
          </div>
          <div className="p-[24px]">
            <ul className="flex flex-col justify-start gap-y-2 h-full">
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <LayoutDashboard size={18} className="leading-none" />
                </span>
                <span>Dashboard</span>
              </li>
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <ClipboardList size={18} className="leading-none" />
                </span>
                <span>Tasks</span>
              </li>
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <FolderKanban size={18} className="leading-none" />
                </span>
                <span>Projects</span>
              </li>
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <CalendarDays size={18} className="leading-none" />
                </span>
                <span>Calendar</span>
              </li>
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <Kanban size={18} className="leading-none" />
                </span>
                <span>Kanbon</span>
              </li>
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <ClipboardMinus size={18} className="leading-none" />
                </span>
                <span>Reports</span>
              </li>
              <li className="flex items-center gap-2 p-[14px] hover:bg-[#f0f8f2] font-medium hover:text-[#59a875] rounded-[8px] text-gray-500 cursor-pointer">
                <span>
                  <Settings size={18} className="leading-none" />
                </span>
                <span>Settings</span>
              </li>
            </ul>
          </div>
          <div className="p-3 absolute bottom-0 left-0 w-full">
            <div className="bg-gray-50 rounded-[8px] flex gap-2 items-center">
              <div>
                <img src="assets/images/profiles/1.jpg" className="w-[80px] 7-[80px] p-2 rounded-full" alt="" />
              </div>
              <div>
                <p className="mb-0 font-semibold">John Doe</p>
                <p className="text-gray-400 text-sm font-medium">johndoe@gmail.com</p>
              </div>
              <div className="ms-3">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
