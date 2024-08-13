export interface profilType {
  id: number;
  image: string;
  name: string;
  username: string;
  email: string;
}

export interface bisnisType {
    id: number,
    name: string,
    description: string,
    photo_url: string,
    location: string,
    contact: string,
    created_at: string,
    updated_at: string,
    category: string,
    owner: string,
    rating: number,
    rating_list: [
      {
        id: number,
        rating_count: number,
        review_description: string,
        business_name: string,
        rater_name: string,
      },
    ]
}

export interface permintaanType {
  id: number;
  title: string;
  user_info: {
    user_id: number;
    owner_username: string;
    user_profile_url: string;
  };
  description: string;
  is_visible: boolean;
  category: {
    id: number;
    name: string;
  };
  created_at: string;
  updated_at: string;
}
