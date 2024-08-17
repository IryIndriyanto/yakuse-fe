import { useState, useEffect } from "react";
import axios from "axios";
import { MyNeedId } from "../components/PermintaankuCardListOtherUser/types";
import { BASE_URL } from "../utils/constant";

const useFetchNeedsId = (userId: string) => {
  const [needsId, setNeedsId] = useState<MyNeedId[] | null>(null);
  const [loadingNeedsId, setLoadingNeedsId] = useState<boolean>(true);
  const [errorNeedsId, setErrorNeedsId] = useState<string | null>(null);

  useEffect(() => {
    const fetchNeedsId = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/user-need/${userId}/needs`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setNeedsId(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setErrorNeedsId("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setErrorNeedsId("Unauthorized - Anda tidak memiliki akses.");
              break;
            case 403:
              setErrorNeedsId(
                "Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini."
              );
              break;
            case 404:
              setErrorNeedsId("Not Found - Bisnis tidak ditemukan.");
              break;
            case 408:
              setErrorNeedsId(
                "Request Timeout - Permintaan ke server telah habis waktu."
              );
              break;
            case 422:
              setErrorNeedsId(
                "Unprocessable Entity - Data yang diberikan tidak dapat diproses."
              );
              break;
            case 429:
              setErrorNeedsId(
                "Too Many Requests - Terlalu banyak permintaan dalam waktu singkat."
              );
              break;
            case 500:
              setErrorNeedsId(
                "Internal Server Error - Terjadi kesalahan pada server."
              );
              break;
            default:
              setErrorNeedsId(
                `${error.response?.status} - ${error.response?.statusText} ${error.message}`
              );
          }
        } else if (error instanceof Error) {
          setErrorNeedsId(error.message);
        } else {
          setErrorNeedsId("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoadingNeedsId(false);
      }
    };

    fetchNeedsId();
  }, [userId]);

  return { needsId, loadingNeedsId, errorNeedsId };
};

export default useFetchNeedsId;
