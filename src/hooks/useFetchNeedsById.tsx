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
        setError("Failed to fetch need data");
      } finally {
        setLoading(false);
      }
    };

    fetchNeed();
  }, [needId]);
  
  return { need, loading, error };
};

export default useFetchNeedsById;