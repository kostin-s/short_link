export interface IShortLink {
  key: string;
  short: string;
  target: string;
  counter: number;
}

export interface IStatistics {
  offset: number;
  limit: number;
}
