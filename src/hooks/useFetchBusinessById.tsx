import { useState, useEffect } from "react";
import axios from "axios";
import { BusinessById } from "../components/BisniskuCardListUser/types";
import { BASE_URL } from "../utils/constant";

const useFetchBusinessById = (businessId: string) => {
  const [business, setBusiness] = useState<BusinessById | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/business/${businessId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setBusiness(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          switch (err.response.status) {
            case 400:
              setError("Bad Request. Silakan periksa permintaan Anda.");
              break;
            case 401:
              setError("Unauthorized. Silakan login kembali.");
              break;
            case 403:
              setError("Forbidden. Anda tidak memiliki akses. Silakan login kembali.");
              break;
            case 404:
              setError("Data bisnis tidak ditemukan.");
              break;
            case 500:
              setError("Internal Server Error. Silakan coba lagi nanti.");
              break;
            case 502:
              setError("Bad Gateway. Silakan coba lagi nanti.");
              break;
            case 503:
              setError("Service Unavailable. Silakan coba lagi nanti.");
              break;
            case 504:
              setError("Gateway Timeout. Silakan coba lagi nanti.");
              break;
            default:
              setError("Terjadi kesalahan. Silakan coba lagi.");
          }
        } else {
          setError("Failed to fetch business data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [businessId]);

  return { business, loading, error };
};

export default useFetchBusinessById;