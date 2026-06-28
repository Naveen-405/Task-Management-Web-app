import React from "react";
import { Search } from "lucide-react";

const SearchInput = ({ placetext = "search" }) => {
  return (
    <>
      <div className="relative">
        <input
          type="search "
          className="text-lg py-2.5 pl-[40px] pe-2 bg-white border border-gray-400 rounded-[8px] focus:outline-gray-400 placeholder:text-[15px]"
          placeholder={placetext}
        />
        <span className="absolute left-3 top-4">
          <Search size={20} className="text-gray-400" />
        </span>
      </div>
    </>
  );
};

export default SearchInput;
