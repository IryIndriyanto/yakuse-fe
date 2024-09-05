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
        setError("Failed to fetch business data");
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [businessId]);

  return { business, loading, error };
};

export default useFetchBusinessById;