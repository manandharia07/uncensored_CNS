import React from "react";
import { abstract } from "../assests/indexImg";
import SearchIcon from "../assests/Svg Funs/SearchIcon";

const SearchUser = () => {
  return (
    <section
      style={{ backgroundImage: `url(${abstract})` }}
      className="h-72 bg-gray-900 bg-cover bg-center text-gray-50 flex justify-center items-center px-4"
    >
      <div className="container mx-auto flex flex-col gap-4 -translate-y-8 justify-center text-center">
        <h1 className="text-2xl font-bold">Token Explorer By Uncensored CNS</h1>
        <div className="relative flex self-center">
          <input
            type="search"
            id="search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 max-w-2xl rounded-l-lg min-w-[24rem]"
            placeholder="Search by Domain"
            required
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium text-sm p-4 rounded-r-lg">
            <SearchIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchUser;
