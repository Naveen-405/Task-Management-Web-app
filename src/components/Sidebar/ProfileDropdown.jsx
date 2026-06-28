import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="absolute bottom-3 left-3 right-3"
    >
      {/* Profile Card */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-gray-50 rounded-lg flex items-center justify-between p-3 cursor-pointer hover:bg-gray-100 transition"
      >
        <div className="flex items-center gap-3">
          <img
            src="assets/images/profiles/1.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">
              johndoe@gmail.com
            </p>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-20 shadow-2xl left-0 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">

          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 text-left">
            <User size={18} />
            My Profile
          </button>

          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 text-left">
            <Bell size={18} />
            Notifications
          </button>

          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-100 text-left">
            <Settings size={18} />
            Settings
          </button>

          <hr className="my-2 bg-gray-200 border-gray-300" />

          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 text-red-500 text-left">
            <LogOut size={18} />
            Logout
          </button>

        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;