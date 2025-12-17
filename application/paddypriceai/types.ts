export interface PaddyData {
  Date: string;
  State: string;
  Prices: number;
  Production: number;
  parsedDate?: Date;
}

export enum StateName {
  Punjab = 'Punjab',
  Delhi = 'Delhi',
  WestBengal = 'West Bengal',
  TamilNadu = 'Tamil Nadu',
  UttarPradesh = 'Utar Pradesh' // Matches CSV spelling
}

export enum ModelType {
  ARIMA = 'ARIMA',
  SARIMA = 'SARIMA',
  SARIMAX = 'SARIMAX'
}

export interface ModelParams {
  ARIMA?: number[]; // [p, d, q]
  SARIMA?: number[]; // [P, D, Q, s, ...]
  SARIMAX?: number[] | null;
}

export interface ForecastResult {
  date: string;
  price: number;
  isForecast: boolean;
  lowerBound?: number;
  upperBound?: number;
}
