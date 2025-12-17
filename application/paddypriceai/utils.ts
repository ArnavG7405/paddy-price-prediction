import { CSV_DATA, FORECAST_DATA } from './constants';
import { PaddyData, ForecastResult, StateName, ModelType } from './types';

export const parseCSV = (): PaddyData[] => {
  const lines = CSV_DATA.trim().split('\n');
  // Headers: Date,State,Prices,Production
  const data: PaddyData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const currentLine = lines[i].split(',');
    if (currentLine.length < 4) continue;

    // Date format in CSV is MM-DD-YYYY based on analysis (07-01-2018 -> July 1st)
    const dateParts = currentLine[0].split('-');
    
    // Assumption: Format is MM-DD-YYYY
    const month = parseInt(dateParts[0], 10) - 1; // JS months are 0-indexed
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    
    const parsedDate = new Date(year, month, day);
    const price = parseFloat(currentLine[2]);

    data.push({
      Date: currentLine[0],
      State: currentLine[1],
      Prices: isNaN(price) ? 0 : price,
      Production: parseFloat(currentLine[3] || '0'),
      parsedDate: parsedDate
    });
  }

  return data.sort((a, b) => (a.parsedDate?.getTime() || 0) - (b.parsedDate?.getTime() || 0));
};

export const generateForecast = (
  state: string,
  model: ModelType,
  monthsToForecast: number = 36
): ForecastResult[] => {
  const stateForecasts = FORECAST_DATA[state];
  
  if (!stateForecasts) return [];
  
  const modelPrices = stateForecasts[model];
  if (!modelPrices) return [];

  // Determine start date based on state
  // Uttar Pradesh starts Jan 2025, others start Jul 2025
  let startMonth = 0; // January
  let startYear = 2025;

  if (state !== 'Utar Pradesh') { // Matches StateName.UttarPradesh enum value string
    startMonth = 6; // July
  }

  const forecast: ForecastResult[] = [];
  const startDate = new Date(startYear, startMonth, 1);

  for (let i = 0; i < Math.min(monthsToForecast, modelPrices.length); i++) {
    const nextDate = new Date(startDate);
    nextDate.setMonth(startDate.getMonth() + i);
    
    const price = modelPrices[i];

    // Generate dynamic confidence intervals based on the model type and distance
    // Just for visualization purposes as the raw numbers don't have CI
    const marginPercent = 0.02 + (i * 0.005); // Widen over time
    const margin = price * marginPercent;

    forecast.push({
      date: nextDate.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }),
      price: Number(price.toFixed(2)),
      isForecast: true,
      lowerBound: Number((price - margin).toFixed(2)),
      upperBound: Number((price + margin).toFixed(2))
    });
  }

  return forecast;
};
