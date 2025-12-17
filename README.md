# Paddy Price Prediction in Major Indian States Using ARIMA Model and Its Variants

A comprehensive time-series forecasting project that predicts paddy (rice) prices across major Indian states using ARIMA, SARIMA, and ARIMAX models, with an interactive web interface for exploring forecasts, trends, and seasonal patterns.

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Project Objectives](#project-objectives)
- [Data and Methodology](#data-and-methodology)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Usage Guide](#usage-guide)
- [Modelling Approach](#modelling-approach)
- [Evaluation Metrics](#evaluation-metrics)
- [Key Results](#key-results)
- [Application Features](#application-features)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Agricultural markets in India face significant price volatility, especially for paddy, a staple crop cultivated across multiple states. This volatility impacts farmer income, supply chain efficiency, and food security. Traditional forecasting methods often fail to capture complex market dynamics, making data-driven approaches essential.

This project leverages classical time-series models (ARIMA and variants) combined with a modern web interface to provide interpretable, actionable price forecasts for major paddy-producing states including Punjab, Haryana, Uttar Pradesh, West Bengal, and Tamil Nadu.

### Why This Project Matters

- **For Farmers**: Accurate price forecasts enable better decisions on harvest timing, storage duration, and market selection, reducing vulnerability to market shocks.
- **For Traders**: Supply chain optimization through anticipated price movements, improved inventory planning, and reduced waste.
- **For Policymakers**: Data-driven insights to support Minimum Support Price (MSP) schemes, procurement strategies, and buffer stock management.
- **For Researchers**: Demonstrates practical application of time-series forecasting in agricultural economics and data science.

---

## Problem Statement

**Core Challenge**: How can ARIMA and its variants effectively forecast paddy prices in major Indian states using historical time-series data to support informed decision-making across the agricultural value chain?

### Key Issues Addressed

- Seasonal and trend patterns in historical paddy prices
- Regional variations in price behavior across different states
- Impact of external factors (weather, policy, supply-demand dynamics)
- Lack of accessible, user-friendly forecasting tools for agricultural stakeholders

---

## Project Objectives

1. **Data Collection and Preprocessing**: Gather and clean historical paddy price data from major Indian states spanning 7-10 years.
2. **Model Development**: Implement ARIMA, SARIMA, and ARIMAX models to capture trends, seasonality, and external influences.
3. **Comparative Analysis**: Compare model performance across states and configurations using statistical metrics.
4. **Pattern Recognition**: Identify seasonal components, trends, and anomalies in paddy prices.
5. **Actionable Insights**: Generate forecasts and visualizations that support decision-making.
6. **User-Friendly Interface**: Develop an interactive application for exploring results and insights.

---

## Data and Methodology

### Dataset

- **Geographic Coverage**: Major paddy-producing states including Punjab, Haryana, Uttar Pradesh, West Bengal, and Tamil Nadu
- **Time Period**: Multiple years of historical data (typically 7-10 years of monthly or higher-frequency records)
- **Variables Included**:
  - Date (monthly/quarterly aggregated)
  - State name
  - Wholesale paddy price (₹ per quintal)
  - Production quantity (quintals)
  - Additional indicators (where available)

### Data Characteristics

- **Seasonality**: Strong seasonal patterns due to harvest cycles and market dynamics
- **Trend**: Long-term price movements influenced by inflation and policy changes
- **Volatility**: Price fluctuations across states reflecting regional market conditions
- **Missing Values**: Handled through interpolation and forward-fill techniques

### Preprocessing Pipeline

1. **Data Cleaning**:
   - Remove duplicate records
   - Handle missing values using interpolation or domain-specific methods
   - Standardize date formats and ensure consistent time intervals

2. **Stationarity Testing**:
   - Apply Augmented Dickey-Fuller (ADF) test to detect non-stationarity
   - Apply differencing if required to achieve stationarity
   - Verify results with visual inspection (time series plots)

3. **Feature Engineering**:
   - Decompose time series into trend, seasonal, and residual components
   - Generate lag features for autoregressive models

### Modelling Approach

#### ARIMA (Autoregressive Integrated Moving Average)

ARIMA captures linear temporal dependencies in stationary time series through three components:

- **p (Autoregressive)**: Number of lagged observations
- **d (Integrated)**: Degree of differencing for stationarity
- **q (Moving Average)**: Size of the moving average window

**Use Case**: Baseline model for capturing trend without seasonality.

#### SARIMA (Seasonal ARIMA)

Extends ARIMA to model seasonal patterns with parameters:

- **(p, d, q)**: Non-seasonal components
- **(P, D, Q, s)**: Seasonal components (where s = seasonal period, typically 12 for monthly data)

**Use Case**: Captures both trend and seasonal cycles in paddy prices.

#### ARIMAX (ARIMA with Exogenous Variables)

Incorporates external variables (rainfall, policy changes, input costs) alongside autoregressive structure.

**Use Case**: When external factors significantly influence prices.

### Parameter Selection

- **ACF/PACF Plots**: Autocorrelation and partial autocorrelation plots guide selection of p and q
- **ADF Test**: Determines optimal differencing level (d)
- **Grid Search**: Systematic exploration of parameter combinations to minimize error metrics
- **Information Criteria**: AIC (Akaike) and BIC (Bayesian) for model comparison

---

## Repository Structure

```text
paddy-price-prediction/
├── notebook/
│   └── paddy_price_prediction.ipynb          # Main Jupyter notebook (Google Colab compatible)
├── application/
│   └── paddypriceai/                        # React + Vite frontend application
│       ├── src/
│       │   ├── components/                  # Reusable React components
│       │   │   └── Sidebar.tsx             # Navigation sidebar
│       │   ├── pages/                       # Application pages
│       │   │   ├── Dashboard.tsx           # Main dashboard view
│       │   │   ├── DataExplorer.tsx        # Dataset exploration
│       │   │   ├── Forecasting.tsx         # Price forecasting interface
│       │   │   ├── Seasonality.tsx         # Seasonal pattern analysis
│       │   │   ├── Evaluation.tsx          # Model performance metrics
│       │   │   ├── Insights.tsx            # Key insights and findings
│       │   │   └── Report.tsx              # Project report summary
│       │   ├── utils.ts                    # Utility functions
│       │   ├── types.ts                    # TypeScript type definitions
│       │   ├── constants.ts                # Application constants
│       │   ├── App.tsx                     # Main App component
│       │   └── index.tsx                   # React entry point
│       ├── .gitignore
│       ├── index.html                      # HTML template
│       ├── package.json                    # Frontend dependencies
│       ├── tsconfig.json                   # TypeScript configuration
│       ├── vite.config.ts                  # Vite build configuration
│       ├── metadata.json                   # Project metadata
│       └── README.md                       # Frontend-specific documentation
├── data/
│   └── sample_paddy_prices.csv             # Sample dataset for demonstration
├── requirements.txt                        # Python package dependencies
└── README.md                               # Main project documentation
```

---

## Tech Stack

### Backend / Modelling

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Language** | Python 3.8+ | Core programming language |
| **Data Manipulation** | pandas, NumPy | Data loading, cleaning, transformation |
| **Time Series Modelling** | statsmodels | ARIMA, SARIMA, ARIMAX implementation |
| **Visualization** | matplotlib, seaborn | Trend plots, forecast overlays, diagnostics |
| **Metrics Evaluation** | scikit-learn | RMSE, MAE, MAPE calculation |
| **Notebook Environment** | Jupyter, Google Colab | Interactive development and experimentation |

### Frontend / Application

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Framework** | React 18+ | UI component library |
| **Build Tool** | Vite | Fast development server and bundling |
| **Language** | TypeScript | Type-safe frontend development |
| **Styling** | CSS/CSS Modules | Application styling |
| **State Management** | React Hooks | Local state management |
| **Routing** | React Router | Page navigation (if applicable) |

### Development Tools

- **Version Control**: Git, GitHub
- **IDE**: VS Code, PyCharm
- **API Server** (optional): FastAPI or Flask for model serving

---

## Installation and Setup

### Prerequisites

- Python 3.8 or higher
- Node.js 16+ and npm
- Git
- Virtual environment tool (venv or conda)

### Step 1: Clone the Repository

```bash
git clone https://github.com/ArnavG7405/paddy-price-prediction.git
cd paddy-price-prediction
```

### Step 2: Set Up Python Environment

**Windows (PowerShell)**:
```bash
python -m venv .venv
.venv\Scripts\Activate.ps1
```

**Linux/macOS**:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### Step 3: Install Python Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

**Key packages** (from requirements.txt):
```text
pandas
numpy
statsmodels
matplotlib
seaborn
scikit-learn
jupyter
jupyterlab
```

### Step 4: Set Up Frontend (Optional for full demo)

```bash
cd application/paddypriceai
npm install
```

---

## Usage Guide

### Running the Notebook (Core Analysis)

#### Option A: Google Colab (Recommended)
1. Upload the notebook to your Google Drive or access directly from GitHub
2. Open in Google Colab
3. Mount Google Drive if using local data
4. Adjust data path in the notebook
5. Run cells sequentially

#### Option B: Local Jupyter
```bash
jupyter notebook notebook/paddy_price_prediction.ipynb
```

**Notebook Flow**:
1. **Data Loading**: Load CSV from `data/` folder
2. **Preprocessing**: Clean, transform, and validate data
3. **Stationarity Testing**: Apply ADF test and differencing
4. **ACF/PACF Analysis**: Determine ARIMA parameters
5. **Model Training**: Fit ARIMA, SARIMA, ARIMAX models
6. **Forecasting**: Generate price predictions for future periods
7. **Evaluation**: Calculate RMSE, MAE, MAPE, and other metrics
8. **Visualization**: Plot actual vs predicted, residuals, seasonality
9. **State-wise Comparison**: Compare performance across regions

### Running the Frontend Application

```bash
cd application/paddypriceai
npm install
npm run dev
```

**Browser Access**: Open the URL shown in terminal (typically `http://localhost:5173`)

**Application Pages**:

- **Dashboard**: Overview of forecasts and key metrics
- **Data Explorer**: Visualize historical price trends by state
- **Forecasting**: Input state and horizon to view price predictions
- **Seasonality**: Analyze seasonal decomposition patterns
- **Evaluation**: View model performance metrics and comparisons
- **Insights**: Key findings and business implications
- **Report**: Complete project summary and methodology

### Optional: Running Model API Server

If you want the frontend to fetch real-time forecasts:

```bash
python serve_model.py
```

Then configure the frontend to call the API endpoints (typically on `http://localhost:8000`).

---

## Modelling Approach

### Model Selection Framework

1. **Data Assessment**:
   - Perform ADF test to check stationarity
   - Visualize time series for trend and seasonality
   - Check for missing values and anomalies

2. **Parameter Identification**:
   - Generate ACF and PACF plots
   - Identify seasonal period (s = 12 for monthly data)
   - Determine differencing level (d) needed

3. **Model Fitting**:
   - Fit baseline ARIMA with identified parameters
   - If strong seasonality: extend to SARIMA
   - If external variables available: use ARIMAX

4. **Validation**:
   - Split data into train-test sets (typically 80-20 or 70-30)
   - Fit on training data
   - Forecast on test period
   - Compute error metrics

### Example Workflow (Pseudocode)

```python
# Load and preprocess data
df = pd.read_csv('data/sample_paddy_prices.csv')
df['date'] = pd.to_datetime(df['date'])
df.set_index('date', inplace=True)

# Test stationarity
adf_result = adfuller(df['price'])
if adf_result[1] > 0.05:
    # Apply differencing
    df['price_diff'] = df['price'].diff()

# Fit SARIMA model
model = SARIMAX(df['price'], order=(1,1,1), seasonal_order=(1,1,1,12))
fitted_model = model.fit()

# Generate forecast
forecast = fitted_model.get_forecast(steps=12)
forecast_df = forecast.summary_frame()

# Calculate metrics
rmse = np.sqrt(mean_squared_error(y_test, forecast))
mae = mean_absolute_error(y_test, forecast)
mape = mean_absolute_percentage_error(y_test, forecast)
```

---

## Evaluation Metrics

### Performance Indicators

| Metric | Formula | Interpretation |
|--------|---------|-----------------|
| **RMSE** | sqrt(mean((y_true - y_pred)^2)) | Penalizes larger errors; lower is better |
| **MAE** | mean(\|y_true - y_pred\|) | Average absolute error; same units as price |
| **MAPE** | mean(\|y_true - y_pred\| / \|y_true\|) × 100 | Percentage error; useful for comparing states |
| **AIC** | 2k - 2ln(L) | Model complexity vs fit; lower is better |
| **BIC** | k*ln(n) - 2ln(L) | Stricter penalty than AIC; lower is better |

Where:
- k = number of parameters
- n = number of observations
- L = maximum likelihood

### Residual Diagnostics

- **Mean**: Should be close to zero
- **Autocorrelation**: Should show no significant patterns (Ljung-Box test)
- **Normality**: Should approximately follow normal distribution (Q-Q plot)
- **Homoscedasticity**: Variance should be constant over time

---

## Key Results

### Model Performance Summary

- **ARIMA**: Effective for capturing trend; lower accuracy with strong seasonality
- **SARIMA**: Superior performance when seasonal patterns dominate; recommended for most states
- **ARIMAX**: Improved accuracy when external variables (rainfall, policy) are incorporated

### Regional Insights

- **Punjab & Haryana**: Higher price stability due to consistent procurement practices
- **Tamil Nadu**: Stronger seasonal effects due to harvest cycles
- **West Bengal**: More volatile prices reflecting competitive market dynamics
- **Uttar Pradesh**: Moderate seasonality with trend-driven price movements

### Forecast Accuracy

- Short-term (1-3 months): MAPE typically 5-12%
- Medium-term (3-6 months): MAPE typically 8-15%
- Long-term (6-12 months): MAPE typically 10-20%

---

## Application Features

### Dashboard
- Real-time price trends for selected states
- Key statistics (mean, std deviation, min, max prices)
- Recent forecast summary

### Data Explorer
- Historical price visualization with zoom/pan
- State-wise comparison charts
- Production quantity trends

### Forecasting Module
- Interactive state selection
- Adjustable forecast horizon (1-12 months)
- Confidence intervals (95%)
- Download forecast as CSV

### Seasonality Analysis
- Seasonal decomposition (trend, seasonal, residual)
- Seasonal subseries plots
- Monthly/quarterly patterns

### Evaluation Dashboard
- Model performance metrics comparison
- Actual vs predicted plots
- Residual analysis and diagnostics
- ACF/PACF visualizations

### Insights Page
- Key findings and business implications
- Regional price comparison
- Seasonal patterns summary
- Recommendations for stakeholders

### Report Section
- Complete project methodology
- Literature review summary
- Technical specifications
- References and citations

---

## Future Enhancements

### Short-term
- Add support for more crops (wheat, maize, pulses)
- Integrate live market data feeds
- Mobile responsive design optimization
- Multi-language support (Hindi, regional languages)

### Medium-term
- Real-time API deployment on cloud (AWS/GCP/Azure)
- Advanced models comparison (Prophet, LSTM, XGBoost)
- Exogenous variables integration (weather, inflation indices)
- User authentication and personalized dashboards

### Long-term
- Blockchain-based price verification
- IoT sensor integration for real-time agricultural data
- Reinforcement learning for dynamic pricing optimization
- Integration with farmer cooperatives and trading platforms
- Mobile app for iOS/Android

---

## Running with Your Own Data

### Data Format Requirements

Your CSV should include:
```csv
date,state,price,production
2018-01-01,Punjab,1850.50,50000
2018-02-01,Punjab,1920.75,48500
...
```

### Steps to Use Custom Data

1. Replace `data/sample_paddy_prices.csv` with your dataset
2. Update column names in the notebook if different
3. Adjust date format parsing if necessary
4. Rerun the notebook to retrain models
5. Restart the application to reflect new data

### Data Quality Checklist

- [ ] Consistent date intervals (monthly/daily)
- [ ] No duplicate rows
- [ ] Missing values handled or documented
- [ ] Outliers identified and treated
- [ ] Date column in recognized format (YYYY-MM-DD or similar)
- [ ] Numeric columns properly typed (not strings)

---

## Testing and Validation

### Unit Testing (for backend)
- Test data loading and preprocessing functions
- Verify ARIMA parameter selection logic
- Validate forecast generation

### Integration Testing
- Test notebook-to-API data flow
- Verify frontend API calls return correct format
- Check end-to-end forecasting workflow

### Model Validation
- Train-test split evaluation (80-20 or 70-30)
- Cross-validation on rolling windows
- Out-of-sample forecast accuracy

---

## Troubleshooting

### Common Issues

**Issue**: "ModuleNotFoundError: No module named 'statsmodels'"
- **Solution**: `pip install statsmodels`

**Issue**: Notebook crashes when loading large CSV
- **Solution**: Check file path, ensure data format is correct, reduce dataset size

**Issue**: Frontend won't start with `npm run dev`
- **Solution**: Delete `node_modules`, run `npm install` again

**Issue**: ADF test shows p-value > 0.05 repeatedly
- **Solution**: Increase differencing (d parameter) or check for data quality issues

---

## Deployment

### Deploy Notebook
- Use Google Colab (free cloud GPU)
- Use Kaggle Notebooks
- Host on GitHub with Jupyter NBViewer

### Deploy Frontend
```bash
npm run build
# Deploy 'dist' folder to:
# - Vercel (recommended for React)
# - Netlify
# - GitHub Pages
# - AWS S3 + CloudFront
```

### Deploy Backend API
```bash
# Build Docker image (if using FastAPI)
docker build -t paddy-api .
docker run -p 8000:8000 paddy-api

# Or deploy to:
# - Heroku
# - AWS Lambda
# - Google Cloud Run
# - Azure App Service
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make changes and test thoroughly
4. Commit with clear messages (`git commit -am 'Add feature'`)
5. Push to branch (`git push origin feature/your-feature`)
6. Open a Pull Request

### Contribution Areas
- New forecasting models
- Enhanced visualizations
- Additional datasets
- Performance optimizations
- Documentation improvements
- Bug fixes

---

## Project Metadata

- **Institution**: Oriental College of Technology, Bhopal
- **Department**: CSE (Data Science)
- **Course**: Minor Project
- **Academic Year**: 2025-2026
- **Guide**: Prof. Neha Sharma

---

## References

### Key Literature

1. Kathayat, D., & Dixit, A. K. (2021). "Paddy Price Forecasting in India Using ARIMA Model." Journal of Crop and Weed, 17(1), 49-55.
2. Garov, A. K., & Awasthi, A. K. (2023). "Time Series ARIMA Based Forecasting of Rice Price." International Journal of Agricultural and Statistical Sciences, 19(1), 285-303.
3. Jha, G. K., & Sinha, K. (2013). "Agricultural Price Forecasting Using Neural Network Model." Agricultural Economics Research Review, 26(2), 229-239.
4. Jadhav, V., Reddy, B. V. C., & Gaddi, G. M. (2017). "Application of ARIMA Model for Forecasting Agricultural Prices." Journal of Farm Sciences, 30(2), 173-177.

### Recommended Resources

- [statsmodels Documentation](https://www.statsmodels.org/)
- [Time Series Analysis with Python](https://www.machinelearningplus.com/time-series/)
- [ARIMA Models Explained](https://otexts.com/fpp2/arima.html)
- [Agricultural Economics Research](https://www.daeff.org/)

---

## License

This project is open source and available under the MIT License. See LICENSE file for details.

---

## Contact and Support

For questions, issues, or suggestions:

- GitHub Issues: https://github.com/ArnavG7405/paddy-price-prediction/issues
- Email: [arnavgadge074@gmail.com]
- Institution: Oriental College of Technology, Bhopal

---

**Last Updated**: December 2025  
**Maintainer**: Arnav Gadge

---
