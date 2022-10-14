export type User = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
};

export type AccessToken = {
  accessToken: string;
};

export interface UserWithAccessToken extends User, AccessToken {}
