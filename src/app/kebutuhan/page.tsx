"use client";
import Navbarhome from "@/components/Navbarhome";
import Footer from "@/components/Footer";
import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import Recommendation from "@/components/Recommendation";
import BusinessCard from "@/components/BusinessCard";
import { useState, useEffect } from "react";
import { bisnis } from "@/data/mock/detail";
import { bisnisType } from "@/data/mock/type";
import { Toaster } from "react-hot-toast";

export default function PageKebutuhan() {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<bisnisType[]>([]);
  const [data, setData] = useState<bisnisType[]>([]);
  const [shown, setShown] = useState<boolean>(false);
  const [activeFilters, setFilters] = useState<string[]>([]);

  async function fetchData() {
    try {
      // const token = localStorage.getItem("access_token");
      // if (token) {
      //   const data = await fetchRecipeByUpdate(token);
      //   setData(data);
      //   setFilteredData(data);
      // }
      setData(bisnis);
      setFilteredData(bisnis);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilter(data: bisnisType[]) {
    if (activeFilters.length === 0) return data;

    return data.filter((item: bisnisType) =>
      activeFilters.some((filter) =>
        item.category.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  function handleSearch(value = "") {
    setShown(Boolean(value));

    const filterData = handleFilter(data);

    const searchedData = filterData.filter(
      (item: bisnisType) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(searchedData);
  }

  useEffect(() => {
    const filteredByFilters = handleFilter(data);
    setFilteredData(filteredByFilters);
  }, [activeFilters, data]);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  return (
    <>
      {/* <Navbarhome /> */}
      <main className="w-5/6 sm:w-full max-w-[1500px] flex justify-start gap-5 p-10 min-h-[75vh]">
        <Toaster />
        <div className="w-2/5 flex flex-col flex-wrap gap-3 ">
          <Searchbar
            search={search}
            shown={shown}
            setSearch={setSearch}
            fetchData={handleSearch}
          />
          <Filter setFilter={setFilters} />
          <Recommendation data={filteredData} filter={activeFilters} />
        </div>
        <BusinessCard data={filteredData} filter={activeFilters} />
      </main>
      <Footer />
    </>
  );
}
