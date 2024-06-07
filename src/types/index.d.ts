export interface User {
  username?: string;
  email: string;
  password: string;
}

export interface UserInfo {
  email: string;
  password?: string;
  token?: string;
  username: string;
  bio: string;
  image: string;
}