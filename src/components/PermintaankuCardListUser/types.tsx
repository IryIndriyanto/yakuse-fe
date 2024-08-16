export interface MyNeed {
  id: number;
  title: string;
  user_info: {
    user_id: string;
    fullname: string;
    username: string;
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
