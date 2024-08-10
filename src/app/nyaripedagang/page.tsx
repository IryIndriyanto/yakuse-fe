import React from "react";
import Navbarhome from "@/components/Navbarhome";
import Footer from "@/components/Footer";
import Searchbar from "@/components/Searchbar";
import Recommendation from "@/components/Recommendation";
import BusinessCard from "@/components/BusinessCard";

const NyariPedagang = () => {
  return (
    <div className="min-h-screen pb-24">
      <Navbarhome />
      <div className="flex justify-start gap-5 p-10 ">
        <div className="flex flex-col flex-wrap gap-3 max-w-full">
          <Searchbar />
          <Recommendation />
        </div>
        <BusinessCard />
      </div>
      <Footer />
    </div>
  );
};

export default NyariPedagang;
