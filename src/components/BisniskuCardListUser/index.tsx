"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useFetchBusinesses from "../../hooks/useFetchBusiness";
import { MyBusiness } from "./types";
import CircularIndeterminate from "./CircularIndeterminate";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const BisniskuCardListUser = () => {
  const router = useRouter();
  const { businesses, loadingBusiness, errorBusiness } = useFetchBusinesses();
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  useEffect(() => {
    if (errorBusiness) {
      setErrorModalOpen(true);
    }
  }, [errorBusiness]);

  const handleErrorModalClose = () => {
    setErrorModalOpen(false);
  };

  const handleCardClick = (id: string) => {
    router.push(`/detail-bisnis/${id}`);
  };

  if (loadingBusiness)
    return (
      <div className="flex flex-col justify-center items-center mt-[-50px]">
        <CircularIndeterminate />
      </div>
    );

  if (!businesses || businesses.length === 0)
    return (
      <div className="flex flex-col items-center gap-4">
        <p className="text-[20px] font-bold">
          Anda belum memiliki bisnis.
        </p>
      </div>
    );

  if (errorBusiness)
    return (
      <>
        <div className="flex flex-col items-center gap-4">
          <Image src="/icon-error.png" alt="Error" width={100} height={100} />
          <p className="text-[20px] font-bold">{errorBusiness}</p>
        </div>
        <Modal open={errorModalOpen} onClose={handleErrorModalClose}>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-bold mb-4">Error</h2>
              <p className="mb-6">{errorBusiness}</p>
              <div className="flex justify-end">
                <Button onClick={handleErrorModalClose} variant="outlined">
                  Tutup
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );

  return (
    <div className="grid grid-cols-1 gap-4">
      {businesses?.map((business: MyBusiness) => (
        <div
          key={business.id}
          className="flex items-center justify-between font-serif bg-[#E5F5FF] rounded-[8px] p-4 transform hover:scale-105 transition-all duration-300"
          onClick={() => handleCardClick(business.id)}
        >
          <div className="flex items-center gap-8">
            <div>
              <Image
                className="rounded-full w-[150px] h-[150px] bg-image bg-cover bg-center object-cover max-w-none"
                src={business.photo_url || "/default-gray-photo.webp"}
                alt={business.name}
                width={150}
                height={150}
              />
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[28px] font-bold">{business.name}</h4>
              <p className="text-[18px] text-[#005792]">#{business.category}</p>
              <p className="text-[18px] text-[#525455]">{business.location}</p>
            </div>
          </div>

          <div>
            <Image
              className="cursor-pointer"
              src="/chevron-right.svg"
              alt="chevron right"
              width={50}
              height={50}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BisniskuCardListUser;
