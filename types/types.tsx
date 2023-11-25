export type User = {
  id: number;
  is_active: boolean;
  email: string;
  username: string;
  profile: {
    first_name: string;
    last_name: string;
    company: string;
    date_of_birth: string;
    address: string;
  };
  note: string;
  created_at: string;
  updated_at: string;
};
