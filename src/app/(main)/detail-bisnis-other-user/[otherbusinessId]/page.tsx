"use client";

import Image from "next/image";
import Rating from "@mui/material/Rating";
import useFetchBusinessById from "../../../../hooks/useFetchBusinessById";
import { formatRupiah } from "../../../../utils/currencyFormatter";
import { useRouter } from "next/navigation";
import CircularIndeterminate from "@/components/BisniskuCardListUser/CircularIndeterminate";
import { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ContactButton from "@/components/ContactButton";
import ModalContact from "@/components/ModalContact";
import DOMPurify from "dompurify";

const DetailBisnisOtherUser = ({
  params,
}: {
  params: { otherbusinessId: string };
}) => {
  const { otherbusinessId } = params;
  const { business, loading, error } = useFetchBusinessById(otherbusinessId);
  const router = useRouter();
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      setErrorModalOpen(true);
    }
  }, [error]);

  const handleErrorModalClose = () => {
    if (error?.includes("Unauthorized") || error?.includes("Forbidden")) {
      router.push("/login");
    }
    setErrorModalOpen(false);
  };

  const handleContactClick = () => {
    setIsButtonLoading(true);
    setContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setContactModalOpen(false);
    setIsButtonLoading(false);
  };

  const sanitizedDescription = DOMPurify.sanitize(
    (business?.description_list?.join("\n") || "").replace(/\n/g, "<br><br>")
  );

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <CircularIndeterminate />
      </div>
    );

  return (
    <div className="bg-[#FCFCFC] font-serif">
      <div className="grid grid-cols-2 gap-20 p-10 lg:flex lg:flex-col lg:gap-10 lg:p-0 lg:max-w-[800px] lg:mx-auto">
        <div className="lg:flex lg:justify-center">
          <Image
            className="sticky top-8"
            src={business?.photo_url || "/default-gray-photo.png"}
            alt="Foto Bisnis"
            width={500}
            height={300}
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between lg:w-[700px]">
            <div className="max-w-[400px] lg:max-w-[700px]">
              <h1 className="text-5xl font-bold">{business?.name}</h1>
            </div>
          </div>

          <div className="flex items-start max-w-[400px] gap-20 lg:max-w-[700px]">
            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px] font-bold">Omset</p>
              <Rating value={business?.avg_rating} precision={0.5} readOnly />
              <p className="text-[18px] font-bold">Alamat</p>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <p className="text-[18px]">
                {formatRupiah(business?.omset || 0)}
              </p>
              <p className="text-[18px]">
                {business?.avg_rating} dari {business?.total_rater} pengulas
              </p>
              <p className="text-[18px] text-justify">{business?.location}</p>
            </div>
          </div>
          <div>
            <p className="text-[18px] font-bold text-[#005792]">
              #{business?.category}
            </p>
          </div>

          <div className="w-[500px] text-justify lg:w-[700px] lg:mb-10">
            <p
              dangerouslySetInnerHTML={{
                __html: sanitizedDescription,
              }}
            />
          </div>
          <ContactButton
            isButtonLoading={isButtonLoading}
            loading={loading}
            handleContactClick={handleContactClick}
          />
        </div>
      </div>
      <Modal open={errorModalOpen} onClose={handleErrorModalClose}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Error</h2>
            <p className="mb-6">{error}</p>
            <div className="flex justify-end">
              <Button onClick={handleErrorModalClose} variant="outlined">
                Tutup
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <ModalContact
        open={contactModalOpen}
        onClose={handleContactModalClose}
        userId={business?.owner_info.user_id || ""}
      />
    </div>
  );
};

export default DetailBisnisOtherUser;
