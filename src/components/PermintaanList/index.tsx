"use client";

import PermintaanCard from "@/components/PermintaanCard";
import { permintaanType } from "@/data/type";
import React from "react";

interface permintaanProps {
  filter: string[];
  data: permintaanType[];
}

export default function PermintaanList({ filter, data }: permintaanProps) {
  const filteredItems = data.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((f) =>
        item.category.name.toLowerCase().includes(f.toLowerCase()))
  );

  return (
    <div className="w-full pb-[81px]">
      <div className="flex flex-wrap space-y-7">
        {filteredItems.map((item: permintaanType) => (
          <PermintaanCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
