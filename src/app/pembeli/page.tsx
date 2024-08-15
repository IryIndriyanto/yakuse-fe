"use client";
import Navbarhome from "@/components/Navbarhome";
import Footer from "@/components/Footer";
import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import PermintaanList from "@/components/PermintaanList";
import { permintaan } from "@/data/mock";
import { permintaanType } from "@/data/type";
import { useState, useEffect } from "react";
import { fetchAllNeeds } from "@/data/api";

export default function PagePembeli() {
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<permintaanType[]>([]);
  const [data, setData] = useState<permintaanType[]>([]);
  const [shown, setShown] = useState<boolean>(false);
  const [activeFilters, setFilters] = useState<string[]>([]);

  async function fetchData() {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const data = await fetchAllNeeds(token);
        setData(data);
        setFilteredData(data);
      }
      // setData(permintaan);
      // setFilteredData(permintaan);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilter(data: permintaanType[]) {
    if (activeFilters.length === 0) return data;

    return data.filter((item: permintaanType) =>
      activeFilters.some((filter) =>
        item.category.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  function handleSearch(value = "") {
    setShown(Boolean(value));

    const filterData = handleFilter(data);

    const searchedData = filterData.filter(
      (item: permintaanType) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
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
      <Navbarhome />
      <main className="w-full max-w-[800px] flex flex-col space-y-12 px-4 py-12 sm:px-6 md:px-10 lg:px-14">
        <Searchbar
          search={search}
          shown={shown}
          setSearch={setSearch}
          fetchData={handleSearch}
          // setFilter={setFilter}
        />
        <Filter setFilter={setFilters} />
        <PermintaanList data={filteredData} filter={activeFilters} />
      </main>
      <Footer />
    </>
  );
}
