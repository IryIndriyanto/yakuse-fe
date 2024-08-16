import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { MyNeed } from "../components/PermintaankuCardListUser/types";

const useFetchNeeds = () => {
  const [needs, setNeeds] = useState<MyNeed | null>(null);
  const [loadingNeeds, setLoadingNeeds] = useState<boolean>(true);
  const [errorNeeds, setErrorNeeds] = useState<string | null>(null);

  useEffect(() => {
    const fetchNeeds = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user-needs/my-needs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setNeeds(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setErrorNeeds("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setErrorNeeds("Unauthorized - Anda tidak memiliki akses.");
              break;
            case 403:
              setErrorNeeds("Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini.");
              break;
            case 404:
              setErrorNeeds("Not Found - Kebutuhan tidak ditemukan.");
              break;
            case 408:
              setErrorNeeds("Request Timeout - Permintaan ke server telah habis waktu.");
              break;
            case 422:
              setErrorNeeds("Unprocessable Entity - Data yang diberikan tidak dapat diproses.");
              break;
            case 429:
              setErrorNeeds("Too Many Requests - Terlalu banyak permintaan dalam waktu singkat.");
              break;
            case 500:
              setErrorNeeds("Internal Server Error - Terjadi kesalahan pada server.");
              break;
            default:
              setErrorNeeds(`${error.response?.status} - ${error.response?.statusText} ${error.message}`);
          }
        } else if (error instanceof Error) {
          setErrorNeeds(error.message);
        } else {
          setErrorNeeds("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoadingNeeds(false);
      }
    };

    fetchNeeds();
  }, []);

  return { needs, loadingNeeds, errorNeeds };
};

export default useFetchNeeds;
