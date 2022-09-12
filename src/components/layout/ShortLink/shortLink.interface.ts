export interface IShortLinkForm {
  link: string;
}

export interface IShortLinkResponse {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface ILinkInfo {
  show: boolean;
  short: string;
  target: string;
}
