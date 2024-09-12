import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { ContactInfo } from "../components/ModalContact/types";
import { useRouter } from "next/navigation";

const useFetchContactId = (userId: string) => {
  const [contactId, setContactId] = useState<ContactInfo | null>(null);
  const [fetchContactId, setFetchContactId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchContactId = async () => {
      try {
        console.log("masuk sini");
        const response = await axios.get(`${BASE_URL}/user/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setContactId(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setFetchContactId("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setFetchContactId(
                "Unauthorized - Anda tidak memiliki akses. Silahkan login kembali"
              );
              setTimeout(() => {
                router.push("/login");
              }, 10000);
              break;
            case 403:
              setFetchContactId(
                "Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini. Silahkan login kembali"
              );
              setTimeout(() => {
                router.push("/login");
              }, 10000);
              break;
            case 404:
              setFetchContactId("Not Found - Profil tidak ditemukan.");
              break;
            case 408:
              setFetchContactId(
                "Request Timeout - Permintaan ke server telah habis waktu."
              );
              break;
            case 429:
              setFetchContactId(
                "Too Many Requests - Terlalu banyak permintaan dalam waktu singkat."
              );
              break;
            case 500:
              setFetchContactId(
                "Internal Server Error - Terjadi kesalahan pada server."
              );
              break;
            default:
              setFetchContactId(
                `${error.response?.status} - ${error.response?.statusText} ${error.message}`
              );
          }
        } else if (error instanceof Error) {
          setFetchContactId(error.message);
        } else {
          setFetchContactId("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoadingId(false);
      }
    };

    fetchContactId();
  }, [router, userId]);

  return { contactId, fetchContactId, loadingId };
};

export default useFetchContactId;
