export interface MyBusiness {
  id: string;
  name: string;
  category: string;
  location: string;
  photo_url: string;
  price: string;
  description: string;
  contact: string;
  created_at: string;
  updated_at: string;
  user_info: {
    user_id: string;
    fullname: string;
  };
  rating: number;
  total_rater: number;
  rating_list: [
    {
      id: string;
      rating_count: number;
      review_description: string;
      business_name: string;
      rater_name: string;
    }
  ];
  description_list: string[];
}
