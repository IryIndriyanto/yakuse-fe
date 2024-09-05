import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { MyNeed } from "../components/PermintaankuCardListUser/types";

const useFetchNeedsById = (needId: string) => {
  const [need, setNeed] = useState<MyNeed | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNeed = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user-need/detail/${needId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setNeed(response.data);
        console.log("response.data", response.data);
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
              setError("Data kebutuhan tidak ditemukan.");
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
          setError("Failed to fetch need data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNeed();
  }, [needId]);

  return { need, loading, error };
};

export default useFetchNeedsById;