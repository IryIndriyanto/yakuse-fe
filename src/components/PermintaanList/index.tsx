"use client";

import PermintaanCard from "@/components/PermintaanCard";
import { permintaanType } from "@/data/type";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface permintaanProps {
  filter: string[];
  data: permintaanType[];
  loading: boolean;
}

export default function PermintaanList({ filter, data, loading }: permintaanProps) {
  const filteredItems = data.filter(
    (item) =>
      filter.length === 0 ||
      filter.some((f) =>
        item.category.name.toLowerCase().includes(f.toLowerCase()))
  );

  if (loading) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-left py-5 px-3 rounded-xl cursor-pointer border-separate border-2 space-y-5"
          >
            <div className="flex flex-row rounded-2xl gap-2 items-center">
              <Skeleton className="w-[50px] h-[50px] rounded-2xl" />
              <Skeleton className="h-4 w-[10vw]" />
            </div>
            <div className="flex flex-col rounded-2xl gap-2">
              <Skeleton className="h-4 w-[20vw]" />
              <Skeleton className="h-4 w-[30vw]" />
            </div>
          </div>
        ))}
      </>
    );
  }

  if (!data || data.length === 0)
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-[20px] font-bold text-center">Belum ada permintaan terdaftar</p>
      </div>
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
