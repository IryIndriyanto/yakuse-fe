import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { UserProfile } from "../components/ProfileCardUser/types";
import { useRouter } from "next/navigation";

const useFetchProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          },
        });
        setProfile(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          switch (error.response?.status) {
            case 400:
              setFetchError("Bad Request - Permintaan tidak valid.");
              break;
            case 401:
              setFetchError("Unauthorized - Anda tidak memiliki akses. Silahkan login kembali");
              setTimeout(() => {
                router.push("/login");
              }, 10000);
              break;
            case 403:
              setFetchError("Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini. Silahkan login kembali");
              setTimeout(() => {
                router.push("/login");
              }, 10000);
              break;
            case 404:
              setFetchError("Not Found - Profil tidak ditemukan.");
              break;
            case 408:
              setFetchError("Request Timeout - Permintaan ke server telah habis waktu.");
              break;
            case 429:
              setFetchError("Too Many Requests - Terlalu banyak permintaan dalam waktu singkat.");
              break;
            case 500:
              setFetchError("Internal Server Error - Terjadi kesalahan pada server.");
              break;
            default:
              setFetchError(`${error.response?.status} - ${error.response?.statusText} ${error.message}`);
          }
        } else if (error instanceof Error) {
          setFetchError(error.message);
        } else {
          setFetchError("Terjadi kesalahan yang tidak diketahui");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  return { profile, fetchError, loading };
};

export default useFetchProfile;
