export interface OwnerInfo {
  user_id: string;
  fullname: string;
  photo_url: string;
}

export interface Rating {
  id: string;
  rating_count: number;
  review_description: string;
  business_name: string;
  rater_name: string;
}

export interface MyBusinessId {
  id: string;
  name: string;
  omset: number;
  description_list: string[];
  photo_url: string;
  location: string;
  contact: string;
  created_at: string;
  updated_at: string;
  category: string;
  owner_info: OwnerInfo;
  rating: number;
  total_rater: number;
  rating_list: Rating[];
}
