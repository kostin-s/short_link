export interface IAuthInitialState {
  user: string | null;
  isLoading: boolean;
  accessToken: string;
}

export interface IAuthResponse {}

export interface IAuthLoginResponse {
  user: string;
  access_token: string;
}

export interface IAuthRequest {
  username: string;
  password: string;
}
