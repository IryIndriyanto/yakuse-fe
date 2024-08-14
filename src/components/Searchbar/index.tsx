import React from "react";
import Image from "next/image";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  fetchData: Function;
  shown: boolean;
}

export default function SearchBar({
  search,
  setSearch,
  fetchData,
  shown,
}: SearchBarProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    fetchData(search);
  }

  function handleReset() {
    setSearch("");
    fetchData("");
  }

  return (
    <div className="w-full mx-auto">
      <div className="relative flex items-center w-full h-12 rounded-lg border-[1px] border-b-two border-solid focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
          <Image
            src="/icon-search.svg"
            alt="Find"
            width={6}
            height={6}
            onClick={handleSearch}
            className="h-6 w-6"
          />
        </div>
        <input
          className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
          type="text"
          id="search"
          placeholder="Search something.."
          value={search}
          onChange={handleSearchChange}
        />
        {shown && (
          <button
            onClick={handleReset}
            className="h-[30px] w-[30px] rounded-full text-[15px] font-[400] m-[7px] text-neutral-500"
          >
            x
          </button>
        )}
      </div>
    </div>
  );
}
