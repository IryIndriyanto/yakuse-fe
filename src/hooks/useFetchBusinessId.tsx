import { useState, useEffect } from "react";
import axios from "axios";
import { MyBusinessId } from "../components/BisniskuCardListOtherUser/types";
import { BASE_URL } from "../utils/constant";

const useFetchBusinessesId = () => {
  const [businessesId, setBusinessesId] = useState<MyBusinessId[] | null>(null);
  const [loadingBusinessId, setLoadingBusinessId] = useState<boolean>(true);
  const [errorBusinessId, setErrorBusinessId] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinessesId = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/business/user/{user_Id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setBusinessesId(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setErrorBusinessId("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setErrorBusinessId("Unauthorized - Anda tidak memiliki akses.");
              break;
            case 403:
              setErrorBusinessId(
                "Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini."
              );
              break;
            case 404:
              setErrorBusinessId("Not Found - Bisnis tidak ditemukan.");
              break;
            case 408:
              setErrorBusinessId(
                "Request Timeout - Permintaan ke server telah habis waktu."
              );
              break;
            case 422:
              setErrorBusinessId(
                "Unprocessable Entity - Data yang diberikan tidak dapat diproses."
              );
              break;
            case 429:
              setErrorBusinessId(
                "Too Many Requests - Terlalu banyak permintaan dalam waktu singkat."
              );
              break;
            case 500:
              setErrorBusinessId(
                "Internal Server Error - Terjadi kesalahan pada server."
              );
              break;
            default:
              setErrorBusinessId(
                `${error.response?.status} - ${error.response?.statusText} ${error.message}`
              );
          }
        } else if (error instanceof Error) {
          setErrorBusinessId(error.message);
        } else {
          setErrorBusinessId("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoadingBusinessId(false);
      }
    };

    fetchBusinessesId();
  }, []);

  return { businessesId, loadingBusinessId, errorBusinessId };
};

export default useFetchBusinessesId;
