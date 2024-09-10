import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { ContactInfo } from "./types";
import useFetchProfileId from "@/hooks/useFetchProfileId";

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
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
          {loadingId ? (
            <p>Loading...</p>
          ) : fetchErrorId ? (
            <p>Error: {fetchErrorId}</p>
          ) : (
            <>
              <p className="mb-6">Anda ingin menghubungi kami via:</p>
              <div className="flex flex-col gap-4">
                <Button
                  variant="contained"
                  color="primary"
                  href={`mailto:${profileId?.email}`}
                  disabled={!profileId}
                >
                  {profileId?.email || "Email"}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  href={`https://wa.me/${profileId?.phone}`}
                  disabled={!profileId}
                >
                  {profileId?.phone || "Phone"}
                </Button>
              </div>
            </>
          )}
          <div className="flex justify-end mt-4">
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
