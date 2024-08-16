export interface DetailBisnis {
    id: string;
    name: string;
    price: string;
    description: string;
    photo_url: string;
    location: string;
    contact: string;
    created_at: string;
    updated_at: string;
    category: string;
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
    ],
    description_list: string[];
  }
