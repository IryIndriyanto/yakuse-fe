import axios from "axios";
import { BASE_URL } from "@/utils/constant";
import {
  bisnisType,
  categoryType,
  permintaanType,
  ratingType,
} from "../type";

// Base function
async function apiGetRequest<T>(url: string, token: string): Promise<T> {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

// Fetch user profile
export async function fetchUser(token: string): Promise<any> { 
  return apiGetRequest<any>(`${BASE_URL}/user/profile`, token);
}

// Fetch business
export async function fetchAllBusiness(token: string): Promise<bisnisType[]> {
  return apiGetRequest(`${BASE_URL}/business/all`, token);
}

export async function fetchBusinessById(
  businessId: string,
  token: string
): Promise<bisnisType> {
  return apiGetRequest(`${BASE_URL}/business/${businessId}`, token);
}

// Fetch category list
export async function fetchCategory(token: string): Promise<categoryType[]> {
  return apiGetRequest(`${BASE_URL}/business_category`, token);
}

// Fetch rating list
export async function fetchRating(token: string): Promise<ratingType[]> {
  return apiGetRequest(`${BASE_URL}/rating`, token);
}

// Fetch needs
export async function fetchAllNeeds(token: string): Promise<permintaanType[]> {
  return apiGetRequest(`${BASE_URL}/user-need/all`, token);
}

export async function fetchNeedById(
  needId: string,
  token: string
): Promise<permintaanType[]> {
  return apiGetRequest(`${BASE_URL}/user-need/detail/${needId}`, token);
}
