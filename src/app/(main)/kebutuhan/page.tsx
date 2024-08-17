"use client";
import Navbarhome from "@/components/Navbarhome";
import Footer from "@/components/Footer";
import Searchbar from "@/components/Searchbar";
import Filter from "@/components/Filter";
import Recommendation from "@/components/Recommendation";
import BusinessCard from "@/components/BusinessCard";
import { useState, useEffect } from "react";
import { bisnis } from "@/data/mock";
import { bisnisType } from "@/data/type";
import { Toaster } from "react-hot-toast";
import { fetchAllBusiness, fetchBusinessById } from "@/data/api";

export default function PageKebutuhan() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<bisnisType[]>([]);
  const [filteredData, setFilteredData] = useState<bisnisType[]>([]);
  const [activeBusinessId, setActiveBusinessId] = useState<string | null>(null);
  const [activeBusinessData, setActiveBusinessData] =
    useState<bisnisType | null>(null);
  const [shown, setShown] = useState<boolean>(false);
  const [activeFilters, setFilters] = useState<string[]>([]);

  async function fetchData() {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const data = await fetchAllBusiness(token);
        setData(data);
        setFilteredData(data);
      }
      // setData(bisnis);
      // setFilteredData(bisnis);
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

  const handleBusinessClick = (id: string) => {
    setActiveBusinessId(id);
  };

  async function fetchActiveBusiness() {
    if (activeBusinessId) {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          const data = await fetchBusinessById(activeBusinessId, token);
          setActiveBusinessData(data);
        // }
        // const businessData = bisnis.find(
        //   (bisnis) => bisnis.id === activeBusinessId
        // );
        // if (businessData) {
        //   setActiveBusinessData(businessData);
        } else {
          console.log(`No mock data found for ID ${activeBusinessId}`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    fetchActiveBusiness();
  }, [activeBusinessId]);

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
          <Recommendation
            data={filteredData}
            filter={activeFilters}
            onClick={handleBusinessClick}
          />
        </div>
        <BusinessCard business={activeBusinessData} />
      </main>
    </>
  );
}
