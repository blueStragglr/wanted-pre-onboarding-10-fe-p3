export interface UserInfo {
  name: string;
}

export interface User {
  userId: number; // pk
  username: string;
  password: string;
  userInfo: UserInfo;
}
