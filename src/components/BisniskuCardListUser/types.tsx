export interface MyBusiness {
  id: string;
  name: string;
  category: string;
  location: string;
  photo_url: string;
  contact: string;
  created_at: string;
  updated_at: string;
  owner_info: {
    user_id: string;
    fullname: string;
    photo_url: string;
  };
  rating: number;
  total_rater: number;
  rating_list: [
    {
      id: string;
      rating_count: number;
      review_description: string;
      rater_name: string;
    }
  ];
  description_list: string[];
  omset: number;
}