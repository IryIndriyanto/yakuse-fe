"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";
import useFetchBusinessById from "../../../../hooks/useFetchBusinessById";
import { formatRupiah } from "../../../../utils/currencyFormatter";
import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { BusinessById } from "@/components/BisniskuCardListUser/types";
import CircularIndeterminate from "@/components/BisniskuCardListUser/CircularIndeterminate";

const DetailBisnis = ({ params }: { params: { businessId: string } }) => {
  const { businessId } = params;
  const router = useRouter();
  const { business, loading, error } = useFetchBusinessById(businessId);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEdit = () => {
    router.push(`/edit-bisnis/${businessId}`);
  };

  const handleDelete = async () => {
    const response = await axios.delete(
      `${BASE_URL}/business/delete/${businessId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    if (response.status === 200) {
      router.push("/profile-user");
    }
    handleClose();
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <CircularIndeterminate />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#FCFCFC] font-serif">
      <div className="grid grid-cols-2 gap-20 p-10">
        <div>
          <Image
            className="sticky top-8"
            src={business?.photo_url || "/default-gray-photo.png"}
            alt="detail-bisnis-1"
            width={500}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="max-w-[400px]">
              <h1 className="text-5xl font-bold">{business?.name}</h1>
            </div>
            <div className="flex justify-center items-start gap-4">
              <Image
                className="cursor-pointer"
                src="/icon-pencil.svg"
                alt="icon-pencil"
                width={24}
                height={24}
                onClick={handleEdit}
              />
              <Image
                className="cursor-pointer"
                src="/icon-trash.svg"
                alt="icon-trash"
                width={24}
                height={24}
                onClick={handleOpen}
              />
            </div>
          </div>

          <div className="flex gap-20">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px] font-bold">Omset</p>
              <Rating value={business?.avg_rating} precision={0.5} readOnly />
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px]">
                {formatRupiah(business?.omset || 0)}
              </p>
              <p className="text-[18px]">
                {business?.avg_rating} dari {business?.total_rater} pengulas
              </p>
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#005792]">
              #{business?.category}
            </p>
          </div>

          <div className="w-[500px] text-justify">
            <p>{business?.description_list}</p>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Konfirmasi Hapus</h2>
            <p className="mb-6">
              Apakah Anda yakin ingin menghapus bisnis ini?
            </p>
            <div className="flex justify-end gap-4">
              <Button onClick={handleDelete} variant="contained" color="error">
                Hapus
              </Button>
              <Button onClick={handleClose} variant="outlined">
                Batal
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailBisnis;
