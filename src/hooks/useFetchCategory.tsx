import { useState, useEffect } from "react";
import axios from "axios";
import { CategoryProps } from "@/components/Filter/types";
import { BASE_URL } from "../utils/constant";

const useFetchCategory = () => {
    const [category, setCategory] = useState < CategoryProps[] | null > (null);
    const [loadingCategory, setLoadingCategory] = useState < boolean > (true);
    const [errorCategory, setErrorCategory] = useState < string | null > (null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/business_category/`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });
                setCategory(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    switch (error.response?.status) {
                        case 400:
                            setErrorCategory("Bad Request - Permintaan tidak valid.");
                            break;
                        case 401:
                            setErrorCategory("Unauthorized - Anda tidak memiliki akses.");
                            break;
                        case 403:
                            setErrorCategory("Forbidden - Anda tidak memiliki izin untuk mengakses sumber daya ini.");
                            break;
                        case 404:
                            setErrorCategory("Not Found - Bisnis tidak ditemukan.");
                            break;
                        case 408:
                            setErrorCategory("Request Timeout - Permintaan ke server telah habis waktu.");
                            break;
                        case 422:
                            setErrorCategory("Unprocessable Entity - Data yang diberikan tidak dapat diproses.");
                            break;
                        case 429:
                            setErrorCategory("Too Many Requests - Terlalu banyak permintaan dalam waktu singkat.");
                            break;
                        case 500:
                            setErrorCategory("Internal Server Error - Terjadi kesalahan pada server.");
                            break;
                        default:
                            setErrorCategory(`${error.response?.status} - ${error.response?.statusText} ${error.message}`);
                    };
                } else if (error instanceof Error) {
                    setErrorCategory(error.message);
                } else {
                    setErrorCategory("Terjadi kesalahan yang tidak diketahui");
                }
            } finally {
                setLoadingCategory(false);
            }
        };

        fetchCategory();
    }, []);

    return { category, loadingCategory, errorCategory };
}

export default useFetchCategory