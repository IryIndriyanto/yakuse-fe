import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { ContactInfo } from "./types";
import useFetchProfileId from "@/hooks/useFetchProfileId";
import Image from "next/image"; // Tambahkan import ini

interface ModalContactProps {
  open: boolean;
  onClose: () => void;
  userId: string;
}

const ModalContact: React.FC<ModalContactProps> = ({
  open,
  onClose,
  userId,
}) => {
  const { profileId, fetchErrorId, loadingId } = useFetchProfileId(userId);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:w-96 md:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
          {loadingId ? (
            <p>Loading...</p>
          ) : fetchErrorId ? (
            <p>Error: {fetchErrorId}</p>
          ) : (
            <>
              <p className="mb-6">Anda ingin menghubungi kami via:</p>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${profileId?.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <Image
                    src="/outlook.svg"
                    alt="Email Icon"
                    width={60}
                    height={60}
                  />
                </a>
                <a
                  href={`https://wa.me/${profileId?.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="Phone Icon"
                    width={60}
                    height={60}
                  />
                </a>
              </div>
            </>
          )}
          <div className="flex justify-end mt-4 md:justify-center sm:justify-center">
            <Button onClick={onClose} variant="outlined">
              Tutup
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalContact;
