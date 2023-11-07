import { useState } from "react";

const SearchBar = () => {
    return (
        <div className="max-w-[800px] mx-auto relative">
            <input type="search" placeholder="Search here" name="" id="" className="border-2 w-full py-3 px-8 rounded-3xl" />

            <button type="submit" className="bg-[#fa8507] absolute right-0 h-full px-8 rounded-e-3xl text-white text-lg">
                Search
            </button>
        </div>
    );
};

export default SearchBar;