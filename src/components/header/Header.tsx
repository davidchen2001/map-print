import React from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Bars4Icon } from "@heroicons/react/16/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5">
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder="start your search"
        />
        <MagnifyingGlassCircleIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars4Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
