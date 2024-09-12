export interface profilType {
  id: string,
  username: string,
  email: string,
  fullname: string,
  phone: string,
  address: string,
  photo_url: string,
  about_me_list: string[],
  created_at: string,
  updated_at: string
}

export interface bisnisType {
  id: string,
  name: string,
  omset: number,
  description_list: string[],
  photo_url: string,
  location: string,
  contact: string,
  created_at: string,
  updated_at: string,
  category: string,
  owner_info: {
    user_id: string,
    fullname: string,
    photo_url: string
  },
  avg_rating: number,
  total_rater: number,
  rating_list: [
    {
      id: string,
      rating_count: number,
      review_description: string,
      rater_name: string
    }
  ]
}

export interface categoryType {
  id: string,
  name: string,
  describe: string,
  created_at: string
}

export interface ratingType {
  id: string,
  rating_count: number,
  review_description: string,
  created_at: string,
  updated_at: string,
  business_name: string,
  rater_name: string
}

export interface permintaanType {
  id: number,
  title: string,
  user_info: {
    user_id: string,
    fullname: string,
    username: string,
    user_profile_url: string
  },
  description: string,
  is_visible: true,
  category: {
    id: number,
    name: string,
  },
  created_at: string,
  updated_at: string
}
