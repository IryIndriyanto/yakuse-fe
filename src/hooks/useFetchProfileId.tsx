import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { OtherUserProfile } from "../components/ProfileCardOtherUser/types";

const useFetchProfileId = (userId: string) => {
  const [profileId, setProfileId] = useState<OtherUserProfile | null>(null);
  const [fetchErrorId, setFetchErrorId] = useState<string | null>(null);
  const [loadingId, setLoadingId] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfileId = async () => {
      try {
        console.log("masuk sini");
        const response = await axios.get(`${BASE_URL}/user/profile/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setProfileId(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setFetchErrorId("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setFetchErrorId("Unauthorized - Anda tidak memiliki akses.");
              break;
            case 403:
              setFetchErrorId(
                "Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini."
              );
              break;
            case 404:
              setFetchErrorId("Not Found - Profil tidak ditemukan.");
              break;
            case 408:
              setFetchErrorId(
                "Request Timeout - Permintaan ke server telah habis waktu."
              );
              break;
            case 429:
              setFetchErrorId(
                "Too Many Requests - Terlalu banyak permintaan dalam waktu singkat."
              );
              break;
            case 500:
              setFetchErrorId(
                "Internal Server Error - Terjadi kesalahan pada server."
              );
              break;
            default:
              setFetchErrorId(
                `${error.response?.status} - ${error.response?.statusText} ${error.message}`
              );
          }
        } else if (error instanceof Error) {
          setFetchErrorId(error.message);
        } else {
          setFetchErrorId("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoadingId(false);
      }
    };

    fetchProfileId();
  }, [userId]);

  return { profileId, fetchErrorId, loadingId };
};

export default useFetchProfileId;
