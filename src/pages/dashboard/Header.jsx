import React from "react";
import SearchInput from "../../components/common/SearchInput";
import Notification from "./Notification";
import { Plus } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-semibold mb-1">Good Morning 👋</h1>
          <p className="text-lg ">
            Here's what's happening with your tasks today.
          </p>
        </div>
        <div className="flex items-center gap-5">
          <SearchInput placetext="Search Tasks, Projects..." />
          <Notification />
          <button
            type="button"
            className="h-10 w-10 mb-2 bg-green-400 text-white flex items-center justify-center rounded-full cursor-pointer"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
