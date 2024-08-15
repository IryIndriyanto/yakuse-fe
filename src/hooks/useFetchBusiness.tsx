import { useState, useEffect } from "react";
import axios from "axios";
import { MyBusiness } from "../components/BisniskuCardListUser/types";
import { BASE_URL } from "../utils/constant";

const useFetchBusinesses = () => {
  const [businesses, setBusinesses] = useState<MyBusiness[] | null>(null);
  const [loadingBusiness, setLoadingBusiness] = useState<boolean>(true);
  const [errorBusiness, setErrorBusiness] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/business/my-business`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setBusinesses(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setErrorBusiness("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setErrorBusiness("Unauthorized - Anda tidak memiliki akses.");
              break;
            case 403:
              setErrorBusiness("Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini.");
              break;
            case 404:
              setErrorBusiness("Not Found - Bisnis tidak ditemukan.");
              break;
            case 408:
              setErrorBusiness("Request Timeout - Permintaan ke server telah habis waktu.");
              break;
            case 422:
              setErrorBusiness("Unprocessable Entity - Data yang diberikan tidak dapat diproses.");
              break;
            case 429:
              setErrorBusiness("Too Many Requests - Terlalu banyak permintaan dalam waktu singkat.");
              break;
            case 500:
              setErrorBusiness("Internal Server Error - Terjadi kesalahan pada server.");
              break;
            default:
              setErrorBusiness(`${error.response?.status} - ${error.response?.statusText} ${error.message}`);
          }
        } else if (error instanceof Error) {
          setErrorBusiness(error.message);
        } else {
          setErrorBusiness("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoadingBusiness(false);
      }
    };

    fetchBusinesses();
  }, []);

  return { businesses, loadingBusiness, errorBusiness };
};

export default useFetchBusinesses;