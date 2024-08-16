import { useState, useEffect } from "react";
import { DetailBisnis } from "../app/(main)/detail-bisnis/types";
import { BASE_URL } from "@/utils/constant";
import axios from "axios";

const useFetchDetailBusiness = (business_id: string) => {
  const [detailBusiness, setDetailBusiness] = useState<DetailBisnis[] | null>(null);
  const [loadingDetailBusiness, setLoadingDetailBusiness] = useState(true);
  const [errorDetailBusiness, setErrorDetailBusiness] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetailBusiness = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/business/${business_id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
              },
            });
            setDetailBusiness(response.data);
          } catch (error) {
            if (axios.isAxiosError(error)) {
              switch (error.response?.status) {
                case 400:
                  setErrorDetailBusiness("Bad Request - Permintaan tidak valid.");
                  break;
                case 401:
                  setErrorDetailBusiness("Unauthorized - Anda tidak memiliki akses.");
                  break;
                case 403:
                  setErrorDetailBusiness("Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini.");
                  break;
                case 404:
                  setErrorDetailBusiness("Not Found - Profil tidak ditemukan.");
                  break;
                case 408:
                  setErrorDetailBusiness("Request Timeout - Permintaan ke server telah habis waktu.");
                  break;
                case 429:
                  setErrorDetailBusiness("Too Many Requests - Terlalu banyak permintaan dalam waktu singkat.");
                  break;
                case 500:
                  setErrorDetailBusiness("Internal Server Error - Terjadi kesalahan pada server.");
                  break;
                default:
                  setErrorDetailBusiness(`${error.response?.status} - ${error.response?.statusText} ${error.message}`);
              }
            } else if (error instanceof Error) {
              setErrorDetailBusiness(error.message);
            } else {
              setErrorDetailBusiness("Terjadi kesalahan yang tidak diketahui");
            }
          } finally {
            setLoadingDetailBusiness(false);
          }
        };
    
        fetchDetailBusiness();
      }, []);

  return { detailBusiness, loadingDetailBusiness, errorDetailBusiness };
};

export default useFetchDetailBusiness;