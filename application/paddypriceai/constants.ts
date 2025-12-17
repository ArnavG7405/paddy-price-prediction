import { ModelParams, StateName, ModelType } from './types';

export const APP_NAME = "PaddyPriceAI";

export const CSV_DATA = `Date,State,Prices,Production
07-01-2018,Punjab,1414,1900
08-01-2018,Punjab,1375,1870
09-01-2018,Punjab,1354,1851
10-01-2018,Punjab,1339,1862
11-01-2018,Punjab,1361,1895
12-01-2018,Punjab,1409,1928
01-01-2019,Punjab,1460,1984
02-01-2019,Punjab,1431,2015
03-01-2019,Punjab,1432,1992
04-01-2019,Punjab,1429,1985
05-01-2019,Punjab,1395,1935
06-01-2019,Punjab,1421,1970
07-01-2019,Punjab,1466,2009
08-01-2019,Punjab,1487,2050
09-01-2019,Punjab,1483,2025
10-01-2019,Punjab,1485,2033
11-01-2019,Punjab,1472,2018
12-01-2019,Punjab,1464,2006
01-01-2020,Punjab,3150,3100
02-01-2020,Punjab,3150,3100
03-01-2020,Punjab,2900,2950
04-01-2020,Punjab,1426,1982
05-01-2020,Punjab,1522,2078
06-01-2020,Punjab,3200,3250
07-01-2020,Punjab,3100,3130
08-01-2020,Punjab,3050,3080
09-01-2020,Punjab,1985,2070
10-01-2020,Punjab,2650,2820
11-01-2020,Punjab,2910,2960
12-01-2020,Punjab,3150,3100
01-01-2021,Punjab,3300,3375
02-01-2021,Punjab,3300,3375
03-01-2021,Punjab,3250,3330
04-01-2021,Punjab,3200,3280
05-01-2021,Punjab,3150,3230
06-01-2021,Punjab,2800,2840
07-01-2021,Punjab,2800,2840
08-01-2021,Punjab,2800,2840
09-01-2021,Punjab,2925,2975
10-01-2021,Punjab,3225,3265
11-01-2021,Punjab,3900,3940
12-01-2021,Punjab,3600,3630
01-01-2022,Punjab,3475,3520
02-01-2022,Punjab,3650,3685
03-01-2022,Punjab,3750,3775
04-01-2022,Punjab,3867,3920
05-01-2022,Punjab,2288,2370
06-01-2022,Punjab,2337,2423
07-01-2022,Punjab,2391,2475
08-01-2022,Punjab,2448,2551
09-01-2022,Punjab,3342,3401
10-01-2022,Punjab,3238,3297
11-01-2022,Punjab,3825,3865
12-01-2022,Punjab,4330,4430
01-01-2023,Punjab,4188,4278
02-01-2023,Punjab,4269,4365
03-01-2023,Punjab,4040,4110
04-01-2023,Punjab,4150,4230
05-01-2023,Punjab,2501,2614
06-01-2023,Punjab,2552,2669
07-01-2023,Punjab,2606,2730
08-01-2023,Punjab,2655,2774
09-01-2023,Punjab,3460,3521
10-01-2023,Punjab,3363,3412
11-01-2023,Punjab,3788,3912
12-01-2023,Punjab,4388,4467
01-01-2024,Punjab,4625,4700
02-01-2024,Punjab,2682,2769
03-01-2024,Punjab,2730,2815
04-01-2024,Punjab,2750,2830
05-01-2024,Punjab,2771,2851
06-01-2024,Punjab,2792,2872
07-01-2024,Punjab,2814,2893
08-01-2024,Punjab,2835,2911
09-01-2024,Punjab,2950,3035
10-01-2024,Punjab,2858,2923
11-01-2024,Punjab,3070,3110
12-01-2024,Punjab,3321,3380
01-01-2025,Punjab,2733,2801
02-01-2025,Punjab,2750,2810
03-01-2025,Punjab,2768,2823
04-01-2025,Punjab,2786,2837
05-01-2025,Punjab,2804,2850
06-01-2025,Punjab,2823,2862
07-01-2018,Delhi,1605,0
08-01-2018,Delhi,1579,0
09-01-2018,Delhi,1497,0
10-01-2018,Delhi,1408,0
11-01-2018,Delhi,1581,0
12-01-2018,Delhi,1810,0
01-01-2019,Delhi,1503,0
02-01-2019,Delhi,1445,0
03-01-2019,Delhi,1442,0
04-01-2019,Delhi,1464,0
05-01-2019,Delhi,1486,0
06-01-2019,Delhi,1463,0
07-01-2019,Delhi,1057,0
08-01-2019,Delhi,1031,0
09-01-2019,Delhi,1017,0
10-01-2019,Delhi,1075,0
11-01-2019,Delhi,1070,0
12-01-2019,Delhi,1132,0
01-01-2020,Delhi,1467,0
02-01-2020,Delhi,1479,0
03-01-2020,Delhi,1480,0
04-01-2020,Delhi,1484,0
05-01-2020,Delhi,1504,0
06-01-2020,Delhi,1508,0
07-01-2020,Delhi,1511,0
08-01-2020,Delhi,1515,0
09-01-2020,Delhi,1518,0
10-01-2020,Delhi,1522,0
11-01-2020,Delhi,1525,0
12-01-2020,Delhi,1529,0
01-01-2021,Delhi,1533,0
02-01-2021,Delhi,1536,0
03-01-2021,Delhi,1540,0
04-01-2021,Delhi,1543,0
05-01-2021,Delhi,1563,0
06-01-2021,Delhi,1567,0
07-01-2021,Delhi,1570,0
08-01-2021,Delhi,1574,0
09-01-2021,Delhi,1577,0
10-01-2021,Delhi,1581,0
11-01-2021,Delhi,1584,0
12-01-2021,Delhi,1588,0
01-01-2022,Delhi,1591,0
02-01-2022,Delhi,1595,0
03-01-2022,Delhi,1598,0
04-01-2022,Delhi,1602,0
05-01-2022,Delhi,1622,0
06-01-2022,Delhi,1626,0
07-01-2022,Delhi,1629,0
08-01-2022,Delhi,1633,0
09-01-2022,Delhi,1636,0
10-01-2022,Delhi,1640,0
11-01-2022,Delhi,1643,0
12-01-2022,Delhi,1647,0
01-01-2023,Delhi,1650,0
02-01-2023,Delhi,1654,0
03-01-2023,Delhi,1657,0
04-01-2023,Delhi,1661,0
05-01-2023,Delhi,1681,0
06-01-2023,Delhi,1685,0
07-01-2023,Delhi,1688,0
08-01-2023,Delhi,1692,0
09-01-2023,Delhi,1695,0
10-01-2023,Delhi,1699,0
11-01-2023,Delhi,1702,0
12-01-2023,Delhi,1583,0
01-01-2024,Delhi,1524,0
02-01-2024,Delhi,1562,0
03-01-2024,Delhi,1568,0
04-01-2024,Delhi,1593,0
05-01-2024,Delhi,1600,0
06-01-2024,Delhi,1606,0
07-01-2024,Delhi,1609,0
08-01-2024,Delhi,1614,0
09-01-2024,Delhi,1619,0
10-01-2024,Delhi,1623,0
11-01-2024,Delhi,1628,0
12-01-2024,Delhi,1632,0
01-01-2025,Delhi,1637,0
02-01-2025,Delhi,1641,0
03-01-2025,Delhi,1646,0
04-01-2025,Delhi,1680,0
05-01-2025,Delhi,1684,0
06-01-2025,Delhi,1689,0
07-01-2018,West Bengal,1693,2000
08-01-2018,West Bengal,1698,1969
09-01-2018,West Bengal,1702,1954
10-01-2018,West Bengal,1707,1972
11-01-2018,West Bengal,1711,2015
12-01-2018,West Bengal,1716,2051
01-01-2019,West Bengal,1721,2108
02-01-2019,West Bengal,1725,2140
03-01-2019,West Bengal,1730,2117
04-01-2019,West Bengal,1763,2101
05-01-2019,West Bengal,1768,2055
06-01-2019,West Bengal,1772,2087
07-01-2019,West Bengal,1777,2140
08-01-2019,West Bengal,1781,2194
09-01-2019,West Bengal,1786,2164
10-01-2019,West Bengal,1790,2172
11-01-2019,West Bengal,1795,2156
12-01-2019,West Bengal,1800,2138
01-01-2020,West Bengal,1804,3200
02-01-2020,West Bengal,1809,3200
03-01-2020,West Bengal,1813,2980
04-01-2020,West Bengal,1847,2100
05-01-2020,West Bengal,1851,2201
06-01-2020,West Bengal,1856,3300
07-01-2020,West Bengal,1860,3180
08-01-2020,West Bengal,1865,3135
09-01-2020,West Bengal,1870,2189
10-01-2020,West Bengal,1874,2923
11-01-2020,West Bengal,1807,3082
12-01-2020,West Bengal,1812,3200
01-01-2021,West Bengal,1818,3450
02-01-2021,West Bengal,1823,3450
03-01-2021,West Bengal,1829,3412
04-01-2021,West Bengal,1834,3367
05-01-2021,West Bengal,1840,3324
06-01-2021,West Bengal,1846,3110
07-01-2021,West Bengal,1852,3110
08-01-2021,West Bengal,1858,3110
09-01-2021,West Bengal,1863,3225
10-01-2021,West Bengal,1870,3511
11-01-2021,West Bengal,1881,4060
12-01-2021,West Bengal,1887,3730
01-01-2022,West Bengal,1894,3608
02-01-2022,West Bengal,1900,3795
03-01-2022,West Bengal,1906,3887
04-01-2022,West Bengal,1912,4055
05-01-2022,West Bengal,1919,2460
06-01-2022,West Bengal,2021,2520
07-01-2022,West Bengal,1954,2576
08-01-2022,West Bengal,1852,2651
09-01-2022,West Bengal,1862,3555
10-01-2022,West Bengal,1985,3441
11-01-2022,West Bengal,1965,4090
12-01-2022,West Bengal,1700,4676
01-01-2023,West Bengal,1990,4510
02-01-2023,West Bengal,2015,4592
03-01-2023,West Bengal,1998,4375
04-01-2023,West Bengal,1978,4485
05-01-2023,West Bengal,1756,2711
06-01-2023,West Bengal,1823,2770
07-01-2023,West Bengal,1827,2824
08-01-2023,West Bengal,1945,2890
09-01-2023,West Bengal,1723,3606
10-01-2023,West Bengal,2013,3495
11-01-2023,West Bengal,2075,3995
12-01-2023,West Bengal,2156,4569
01-01-2024,West Bengal,2147,4800
02-01-2024,West Bengal,2068,2915
03-01-2024,West Bengal,2031,2949
04-01-2024,West Bengal,2185,2981
05-01-2024,West Bengal,2674,3014
06-01-2024,West Bengal,2971,3052
07-01-2024,West Bengal,2946,3087
08-01-2024,West Bengal,2101,3104
09-01-2024,West Bengal,2716,3155
10-01-2024,West Bengal,2815,3110
11-01-2024,West Bengal,2946,3215
12-01-2024,West Bengal,2138,3505
01-01-2025,West Bengal,1943,2978
02-01-2025,West Bengal,1946,2984
03-01-2025,West Bengal,1950,2999
04-01-2025,West Bengal,1953,3015
05-01-2025,West Bengal,1956,3030
06-01-2025,West Bengal,1959,3046
07-01-2018,Tamil Nadu,1440,1414
08-01-2018,Tamil Nadu,1250,1375
09-01-2018,Tamil Nadu,1375,1354
10-01-2018,Tamil Nadu,1430,1339
11-01-2018,Tamil Nadu,1430,1361
12-01-2018,Tamil Nadu,1430,1409
01-01-2019,Tamil Nadu,1430,1460
02-01-2019,Tamil Nadu,1688,1431
03-01-2019,Tamil Nadu,1688,1432
04-01-2019,Tamil Nadu,1688,1429
05-01-2019,Tamil Nadu,1688,1395
06-01-2019,Tamil Nadu,1750,1421
07-01-2019,Tamil Nadu,1750,1466
08-01-2019,Tamil Nadu,1750,1487
09-01-2019,Tamil Nadu,1750,1483
10-01-2019,Tamil Nadu,1750,1485
11-01-2019,Tamil Nadu,1750,1472
12-01-2019,Tamil Nadu,1818,1464
01-01-2020,Tamil Nadu,1533,3150
02-01-2020,Tamil Nadu,1533,3150
03-01-2020,Tamil Nadu,1493,2900
04-01-2020,Tamil Nadu,1493,1426
05-01-2020,Tamil Nadu,1400,1522
06-01-2020,Tamil Nadu,1400,3200
07-01-2020,Tamil Nadu,1533,3100
08-01-2020,Tamil Nadu,1533,3050
09-01-2020,Tamil Nadu,1533,1985
10-01-2020,Tamil Nadu,1530,2650
11-01-2020,Tamil Nadu,1440,2910
12-01-2020,Tamil Nadu,1400,3150
01-01-2021,Tamil Nadu,1500,3300
02-01-2021,Tamil Nadu,1626,3300
03-01-2021,Tamil Nadu,1600,3250
04-01-2021,Tamil Nadu,1400,3200
05-01-2021,Tamil Nadu,1400,3150
06-01-2021,Tamil Nadu,1533,2800
07-01-2021,Tamil Nadu,1325,2800
08-01-2021,Tamil Nadu,1335,2800
09-01-2021,Tamil Nadu,1440,2925
10-01-2021,Tamil Nadu,1600,3225
11-01-2021,Tamil Nadu,1640,3900
12-01-2021,Tamil Nadu,1705,3600
01-01-2022,Tamil Nadu,1710,3475
02-01-2022,Tamil Nadu,1665,3650
03-01-2022,Tamil Nadu,1600,3750
04-01-2022,Tamil Nadu,1500,3867
05-01-2022,Tamil Nadu,1500,2288
06-01-2022,Tamil Nadu,1500,2337
07-01-2022,Tamil Nadu,1560,2391
08-01-2022,Tamil Nadu,1610,2448
09-01-2022,Tamil Nadu,1660,3342
10-01-2022,Tamil Nadu,1740,3238
11-01-2022,Tamil Nadu,1820,3825
12-01-2022,Tamil Nadu,1930,4330
01-01-2023,Tamil Nadu,1895,4188
02-01-2023,Tamil Nadu,1905,4269
03-01-2023,Tamil Nadu,1848,4040
04-01-2023,Tamil Nadu,1740,4150
05-01-2023,Tamil Nadu,1740,2501
06-01-2023,Tamil Nadu,1804,2552
07-01-2023,Tamil Nadu,1900,2606
08-01-2023,Tamil Nadu,1900,2655
09-01-2023,Tamil Nadu,1918,3460
10-01-2023,Tamil Nadu,2020,3363
11-01-2023,Tamil Nadu,2110,3788
12-01-2023,Tamil Nadu,2138,4388
01-01-2024,Tamil Nadu,2120,4625
02-01-2024,Tamil Nadu,2025,2682
03-01-2024,Tamil Nadu,1974,2730
04-01-2024,Tamil Nadu,1983,2750
05-01-2024,Tamil Nadu,2104,2771
06-01-2024,Tamil Nadu,2170,2792
07-01-2024,Tamil Nadu,2185,2814
08-01-2024,Tamil Nadu,2088,2835
09-01-2024,Tamil Nadu,2080,2950
10-01-2024,Tamil Nadu,2125,2858
11-01-2024,Tamil Nadu,2140,3070
12-01-2024,Tamil Nadu,2228,3321
01-01-2025,Tamil Nadu,1701,2733
02-01-2025,Tamil Nadu,1704,2750
03-01-2025,Tamil Nadu,1710,2768
04-01-2025,Tamil Nadu,1714,2786
05-01-2025,Tamil Nadu,1718,2804
06-01-2025,Tamil Nadu,1722,2823
07-01-2018,Utar Pradesh,1425,1605
08-01-2018,Utar Pradesh,1600,1579
09-01-2018,Utar Pradesh,1585,1497
10-01-2018,Utar Pradesh,1445,1408
11-01-2018,Utar Pradesh,1550,1581
12-01-2018,Utar Pradesh,1750,1810
01-01-2019,Utar Pradesh,1750,1503
02-01-2019,Utar Pradesh,1750,1445
03-01-2019,Utar Pradesh,1750,1442
04-01-2019,Utar Pradesh,1750,1464
05-01-2019,Utar Pradesh,1750,1486
06-01-2019,Utar Pradesh,1750,1463
07-01-2019,Utar Pradesh,1750,1057
08-01-2019,Utar Pradesh,1710,1031
09-01-2019,Utar Pradesh,1760,1017
10-01-2019,Utar Pradesh,1800,1075
11-01-2019,Utar Pradesh,1810,1070
12-01-2019,Utar Pradesh,1790,1132
01-01-2020,Utar Pradesh,1795,1467
02-01-2020,Utar Pradesh,1795,1479
03-01-2020,Utar Pradesh,1810,1480
04-01-2020,Utar Pradesh,1800,1484
05-01-2020,Utar Pradesh,1750,1504
06-01-2020,Utar Pradesh,1750,1508
07-01-2020,Utar Pradesh,1690,1511
08-01-2020,Utar Pradesh,1715,1515
09-01-2020,Utar Pradesh,1670,1518
10-01-2020,Utar Pradesh,1625,1522
11-01-2020,Utar Pradesh,1868,1525
12-01-2020,Utar Pradesh,1868,1529
01-01-2021,Utar Pradesh,1880,1533
02-01-2021,Utar Pradesh,1868,1536
03-01-2021,Utar Pradesh,1660,1540
04-01-2021,Utar Pradesh,1640,1543
05-01-2021,Utar Pradesh,1560,1563
06-01-2021,Utar Pradesh,1500,1567
07-01-2021,Utar Pradesh,1460,1570
08-01-2021,Utar Pradesh,1500,1574
09-01-2021,Utar Pradesh,1560,1577
10-01-2021,Utar Pradesh,1940,1581
11-01-2021,Utar Pradesh,1940,1584
12-01-2021,Utar Pradesh,1940,1588
01-01-2022,Utar Pradesh,1940,1591
02-01-2022,Utar Pradesh,1940,1595
03-01-2022,Utar Pradesh,1820,1598
04-01-2022,Utar Pradesh,1650,1602
05-01-2022,Utar Pradesh,1480,1622
06-01-2022,Utar Pradesh,1485,1626
07-01-2022,Utar Pradesh,1500,1629
08-01-2022,Utar Pradesh,1600,1633
09-01-2022,Utar Pradesh,1780,1636
10-01-2022,Utar Pradesh,2040,1640
11-01-2022,Utar Pradesh,2040,1643
12-01-2022,Utar Pradesh,2040,1647
01-01-2023,Utar Pradesh,2040,1650
02-01-2023,Utar Pradesh,2040,1654
03-01-2023,Utar Pradesh,1916,1657
04-01-2023,Utar Pradesh,1856,1661
05-01-2023,Utar Pradesh,1921,1681
06-01-2023,Utar Pradesh,1936,1685
07-01-2023,Utar Pradesh,1896,1688
08-01-2023,Utar Pradesh,1884,1692
09-01-2023,Utar Pradesh,1991,1695
10-01-2023,Utar Pradesh,2096,1699
11-01-2023,Utar Pradesh,2184,1702
12-01-2023,Utar Pradesh,2183,1583
01-01-2024,Utar Pradesh,2184,1524
02-01-2024,Utar Pradesh,2171,1562
03-01-2024,Utar Pradesh,2165,1568
04-01-2024,Utar Pradesh,2164,1593
05-01-2024,Utar Pradesh,2224,1600
06-01-2024,Utar Pradesh,2244,1606
07-01-2024,Utar Pradesh,2264,1609
08-01-2024,Utar Pradesh,2305,1614
09-01-2024,Utar Pradesh,2345,1619
10-01-2024,Utar Pradesh,2343,1623
11-01-2024,Utar Pradesh,2342,1628
12-01-2024,Utar Pradesh,2281,1632
01-01-2025,Utar Pradesh,,1637
02-01-2025,Utar Pradesh,,1641
03-01-2025,Utar Pradesh,,1646
04-01-2025,Utar Pradesh,,1680
05-01-2025,Utar Pradesh,,1684
06-01-2025,Utar Pradesh,,1689
`;

export const BEST_PARAMS: Record<string, Record<string, ModelParams>> = {
  'Punjab': {
    'ARIMA': { ARIMA: [1, 1, 4] },
    'SARIMA': { SARIMA: [1, 2, 4, 1, 1, 2] },
    'SARIMAX': { SARIMAX: [0, 0, 3, 1, 0, 0] }
  },
  'Utar Pradesh': {
    'ARIMA': { ARIMA: [2, 1, 2] },
    'SARIMA': { SARIMA: [0, 2, 5, 0, 1, 0] },
    'SARIMAX': { SARIMAX: null }
  },
  'Delhi': {
    'ARIMA': { ARIMA: [8, 1, 4] },
    'SARIMA': { SARIMA: [3, 0, 0, 1, 0, 0] },
    'SARIMAX': { SARIMAX: [1, 1, 0, 1, 0, 1] }
  },
  'West Bengal': {
    'ARIMA': { ARIMA: [14, 2, 13] },
    'SARIMA': { SARIMA: [2, 1, 5, 2, 1, 1] },
    'SARIMAX': { SARIMAX: [2, 0, 2, 1, 1, 0] }
  },
  'Tamil Nadu': {
    'ARIMA': { ARIMA: [9, 2, 15] },
    'SARIMA': { SARIMA: [2, 0, 1, 0, 1, 0] },
    'SARIMAX': { SARIMAX: [1, 0, 2, 1, 0, 2] }
  }
};

export const FORECAST_DATA: Record<string, Record<string, number[] | null>> = {
  'Punjab': {
    'ARIMA': [2848.82, 2900.94, 2869.67, 2897.14, 2876.62, 2891.95, 2880.50, 2889.06, 2882.66, 2887.44, 2883.87, 2886.54, 2884.55, 2886.03, 2884.92, 2885.75, 2885.13, 2885.59, 2885.25, 2885.51, 2885.31, 2885.46, 2885.35, 2885.43, 2885.37, 2885.42, 2885.38, 2885.41, 2885.39, 2885.40, 2885.39, 2885.40, 2885.39, 2885.40, 2885.40, 2885.40],
    'SARIMA': [2867.82, 2728.52, 2879.00, 2914.37, 3161.01, 3418.51, 3253.61, 2985.85, 2952.90, 2891.45, 2616.00, 2756.98, 2807.51, 2749.74, 2907.10, 2945.01, 3216.36, 3462.27, 3360.30, 3115.01, 3069.78, 2998.50, 2637.84, 2771.94, 2827.35, 2779.90, 2962.42, 3000.28, 3284.88, 3521.38, 3483.81, 3162.54, 3120.87, 3031.23, 2658.12, 2813.53],
    'SARIMAX': [2831.17, 2822.46, 2808.25, 2805.78, 2808.24, 2807.06, 2805.32, 2806.03, 2806.48, 2806.84, 2807.29, 2807.92, 2808.62, 2807.87, 2806.65, 2806.44, 2806.65, 2806.55, 2806.40, 2806.46, 2806.50, 2806.53, 2806.57, 2806.62, 2806.68, 2806.62, 2806.51, 2806.49, 2806.51, 2806.50, 2806.49, 2806.50, 2806.50, 2806.50, 2806.50, 2806.51]
  },
  'Utar Pradesh': {
    'ARIMA': [2269.13, 2263.54, 2265.12, 2272.88, 2284.35, 2296.33, 2305.76, 2310.47, 2309.67, 2304.00, 2295.30, 2286.01, 2278.54, 2274.60, 2274.91, 2279.03, 2285.61, 2292.80, 2298.71, 2301.98, 2301.99, 2299.00, 2294.03, 2288.48, 2283.81, 2281.12, 2280.92, 2283.07, 2286.82, 2291.09, 2294.78, 2296.98, 2297.28, 2295.75, 2292.93, 2289.64],
    'SARIMA': [2325.75, 2358.18, 2375.91, 2383.77, 2435.08, 2446.40, 2457.72, 2490.04, 2521.36, 2510.68, 2501.00, 2431.31, 2467.39, 2491.14, 2500.18, 2499.35, 2541.99, 2544.63, 2547.27, 2570.90, 2593.54, 2574.18, 2555.81, 2477.45, 2504.84, 2519.91, 2520.28, 2510.76, 2544.72, 2538.68, 2532.63, 2547.59, 2561.54, 2533.50, 2506.45, 2419.41],
    'SARIMAX': null
  },
  'Delhi': {
    'ARIMA': [1705.77, 1721.60, 1708.04, 1686.44, 1697.67, 1720.03, 1713.80, 1688.74, 1690.73, 1714.63, 1718.20, 1693.51, 1685.72, 1707.35, 1720.22, 1699.69, 1683.42, 1699.20, 1719.37, 1706.17, 1684.08, 1691.37, 1715.65, 1711.78, 1687.43, 1684.97, 1709.53, 1715.49, 1692.83, 1680.89, 1701.85, 1716.58, 1699.28, 1679.66, 1693.71, 1714.74],
    'SARIMA': [1686.33, 1681.23, 1677.61, 1674.96, 1671.67, 1668.70, 1665.30, 1662.37, 1658.99, 1642.75, 1639.81, 1636.44, 1636.47, 1637.58, 1638.03, 1638.05, 1638.36, 1638.52, 1638.88, 1639.03, 1639.38, 1645.44, 1645.59, 1645.94, 1644.78, 1643.13, 1641.79, 1640.63, 1639.35, 1638.13, 1636.82, 1635.61, 1634.31, 1630.48, 1629.27, 1627.97],
    'SARIMAX': [1691.91, 1688.07, 1684.66, 1680.30, 1675.36, 1701.12, 1710.08, 1697.41, 1692.52, 1666.98, 1658.29, 1653.28, 1652.44, 1652.49, 1652.62, 1652.80, 1653.01, 1651.92, 1651.55, 1652.08, 1652.29, 1653.37, 1653.73, 1653.94, 1653.98, 1653.98, 1653.97, 1653.96, 1653.96, 1654.00, 1654.02, 1653.99, 1653.99, 1653.94, 1653.93, 1653.92]
  },
  'West Bengal': {
    'ARIMA': [1588.63, 1931.40, 2257.80, 2525.09, 1872.11, 2249.70, 2496.76, 2997.98, 2559.07, 2545.65, 2659.42, 2815.82, 2693.38, 2559.08, 2614.93, 2376.24, 2326.45, 2355.30, 2591.42, 2116.09, 2106.70, 2072.15, 2526.96, 2324.73, 2179.14, 2260.76, 2581.65, 2631.67, 2537.90, 2633.55, 2681.43, 2709.12, 2662.03, 2887.43, 2721.10, 2706.55],
    'SARIMA': [2155.79, 2070.22, 2125.14, 2323.92, 2380.95, 2266.30, 2240.52, 2205.97, 2193.44, 2313.97, 2681.33, 2898.08, 2914.07, 2241.35, 2729.52, 2857.39, 2977.15, 2332.55, 2175.05, 2166.79, 2164.23, 2192.70, 2280.88, 2334.60, 2491.13, 2269.08, 2426.14, 2607.95, 2678.55, 2438.62, 2382.92, 2354.82, 2344.86, 2443.96, 2744.70, 2922.76],
    'SARIMAX': [2033.38, 1787.89, 2024.40, 2254.71, 2385.66, 2113.78, 2044.85, 2007.74, 1992.58, 2087.10, 2381.29, 2559.93, 2575.76, 1973.57, 2435.56, 2587.92, 2718.73, 2126.96, 1984.33, 1971.10, 1967.33, 2007.32, 2128.11, 2202.13, 2252.82, 1863.01, 2190.75, 2389.52, 2520.42, 2119.11, 2020.36, 1992.92, 1982.36, 2054.82, 2278.85, 2415.17]
  },
  'Tamil Nadu': {
    'ARIMA': [1867.66, 1897.18, 1962.66, 2091.50, 2114.10, 1951.78, 1884.06, 2074.47, 2024.04, 1918.43, 2064.33, 2061.95, 2155.16, 2017.99, 2106.46, 2127.65, 2079.66, 2083.91, 2030.84, 2111.45, 2082.25, 2066.53, 2132.30, 2102.62, 2192.73, 2120.16, 2180.53, 2174.50, 2157.94, 2183.44, 2131.71, 2187.28, 2159.08, 2169.08, 2202.92, 2177.63],
    'SARIMA': [1806.78, 1772.71, 1815.49, 1903.80, 1954.72, 2072.93, 1571.17, 1595.32, 1619.01, 1637.83, 1654.23, 1668.62, 1762.09, 1735.29, 1784.17, 1877.58, 1932.77, 2054.56, 1555.78, 1582.44, 1608.23, 1628.80, 1646.68, 1662.29, 1756.79, 1730.86, 1780.45, 1874.47, 1930.17, 2052.38, 1553.96, 1580.91, 1606.95, 1627.73, 1645.78, 1661.54],
    'SARIMAX': [1875.00, 1893.41, 1886.63, 1882.07, 1868.36, 1912.52, 1656.59, 1678.91, 1694.02, 1676.11, 1649.75, 1649.68, 1725.44, 1759.73, 1758.99, 1758.13, 1757.72, 1757.01, 1757.74, 1756.81, 1756.66, 1756.76, 1756.24, 1755.51, 1755.17, 1755.11, 1754.37, 1753.52, 1753.10, 1752.40, 1753.12, 1752.19, 1752.05, 1752.15, 1751.63, 1750.90]
  }
};

export const SEASONAL_METRICS = {
  'Punjab': { strength: 0.3866, peak: 'January', low: 'May' },
  'Utar Pradesh': { strength: 0.5848, peak: 'November', low: 'July' },
  'Delhi': { strength: 0.1213, peak: 'June', low: 'December' },
  'West Bengal': { strength: 0.1478, peak: 'November', low: 'August' },
  'Tamil Nadu': { strength: 0.3677, peak: 'December', low: 'May' }
};

export const MONTHLY_PATTERNS: Record<string, { month: string, mean: number, min: number, max: number }[]> = {
  'Punjab': [
    { month: 'Jan', mean: 3275.86, min: 1460, max: 4625 },
    { month: 'Feb', mean: 3033.14, min: 1431, max: 4269 },
    { month: 'Mar', mean: 2981.43, min: 1432, max: 4040 },
    { month: 'Apr', mean: 2801.14, min: 1426, max: 4150 },
    { month: 'May', mean: 2347.29, min: 1395, max: 3150 },
    { month: 'Jun', mean: 2560.71, min: 1421, max: 3200 },
    { month: 'Jul', mean: 2370.14, min: 1414, max: 3100 },
    { month: 'Aug', mean: 2378.57, min: 1375, max: 3050 },
    { month: 'Sep', mean: 2499.86, min: 1354, max: 3460 },
    { month: 'Oct', mean: 2594.00, min: 1339, max: 3363 },
    { month: 'Nov', mean: 2903.71, min: 1361, max: 3900 },
    { month: 'Dec', mean: 3094.57, min: 1409, max: 4388 }
  ],
  'Utar Pradesh': [
    { month: 'Jan', mean: 1931.50, min: 1750, max: 2184 },
    { month: 'Feb', mean: 1927.33, min: 1750, max: 2171 },
    { month: 'Mar', mean: 1853.50, min: 1660, max: 2165 },
    { month: 'Apr', mean: 1810.00, min: 1640, max: 2164 },
    { month: 'May', mean: 1780.83, min: 1480, max: 2224 },
    { month: 'Jun', mean: 1777.50, min: 1485, max: 2244 },
    { month: 'Jul', mean: 1712.14, min: 1425, max: 2264 },
    { month: 'Aug', mean: 1759.14, min: 1500, max: 2305 },
    { month: 'Sep', mean: 1813.00, min: 1560, max: 2345 },
    { month: 'Oct', mean: 1898.43, min: 1445, max: 2343 },
    { month: 'Nov', mean: 1962.00, min: 1550, max: 2342 },
    { month: 'Dec', mean: 1978.86, min: 1750, max: 2281 }
  ],
  'Delhi': [
    { month: 'Jan', mean: 1557.86, min: 1467, max: 1650 },
    { month: 'Feb', mean: 1558.86, min: 1445, max: 1654 },
    { month: 'Mar', mean: 1561.57, min: 1442, max: 1657 },
    { month: 'Apr', mean: 1575.29, min: 1464, max: 1680 },
    { month: 'May', mean: 1591.43, min: 1486, max: 1684 },
    { month: 'Jun', mean: 1592.00, min: 1463, max: 1689 },
    { month: 'Jul', mean: 1524.14, min: 1057, max: 1688 },
    { month: 'Aug', mean: 1519.71, min: 1031, max: 1692 },
    { month: 'Sep', mean: 1508.43, min: 1017, max: 1695 },
    { month: 'Oct', mean: 1506.86, min: 1075, max: 1699 },
    { month: 'Nov', mean: 1533.29, min: 1070, max: 1702 },
    { month: 'Dec', mean: 1560.14, min: 1132, max: 1810 }
  ],
  'West Bengal': [
    { month: 'Jan', mean: 1902.43, min: 1721, max: 2147 },
    { month: 'Feb', mean: 1898.00, min: 1725, max: 2068 },
    { month: 'Mar', mean: 1893.86, min: 1730, max: 2031 },
    { month: 'Apr', mean: 1924.57, min: 1763, max: 2185 },
    { month: 'May', mean: 1966.29, min: 1756, max: 2674 },
    { month: 'Jun', mean: 2035.43, min: 1772, max: 2971 },
    { month: 'Jul', mean: 1987.00, min: 1693, max: 2946 },
    { month: 'Aug', mean: 1871.43, min: 1698, max: 2101 },
    { month: 'Sep', mean: 1931.71, min: 1702, max: 2716 },
    { month: 'Oct', mean: 2007.71, min: 1707, max: 2815 },
    { month: 'Nov', mean: 2025.71, min: 1711, max: 2946 },
    { month: 'Dec', mean: 1887.00, min: 1700, max: 2156 }
  ],
  'Tamil Nadu': [
    { month: 'Jan', mean: 1698.43, min: 1430, max: 2120 },
    { month: 'Feb', mean: 1735.14, min: 1533, max: 2025 },
    { month: 'Mar', mean: 1701.86, min: 1493, max: 1974 },
    { month: 'Apr', mean: 1645.43, min: 1400, max: 1983 },
    { month: 'May', mean: 1650.00, min: 1400, max: 2104 },
    { month: 'Jun', mean: 1697.00, min: 1400, max: 2170 },
    { month: 'Jul', mean: 1670.43, min: 1325, max: 2185 },
    { month: 'Aug', mean: 1638.00, min: 1250, max: 2088 },
    { month: 'Sep', mean: 1679.43, min: 1375, max: 2080 },
    { month: 'Oct', mean: 1742.14, min: 1430, max: 2125 },
    { month: 'Nov', mean: 1761.43, min: 1430, max: 2140 },
    { month: 'Dec', mean: 1807.00, min: 1400, max: 2228 }
  ]
};

export const STAKEHOLDER_INSIGHTS = {
  'Punjab': {
    currentPrice: '₹2823.00',
    avgForecast: '₹3003.16',
    range: '₹2616.00 - ₹3521.38',
    trend: '-1.89%',
    peakMonth: 'December 2027',
    lowMonth: 'May 2026',
    farmers: {
      outlook: 'STABLE',
      bestSelling: 'December 2027 onwards',
      avoidSelling: 'May 2026 onwards',
      seasonalAdvice: [
        'Kharif Harvest (Oct-Nov): Prices typically lower; consider bulk storage',
        'Rabi Harvest (Mar-Apr): Generally higher prices due to lower supply',
        'May-Jun: Historically highest prices; prioritize sales during this period if possible'
      ]
    },
    traders: {
      volatility: '₹2183.78 (HIGH)',
      arbitrage: '₹905.38 (Moderate to High)',
      inventory: 'Accumulate May-Sep, Liquidate Dec-Apr'
    },
    policy: {
      security: 'Stable/Growing Production Expected',
      regulation: 'HIGH PRIORITY: Implement price stabilization mechanisms'
    }
  },
  'Delhi': {
    currentPrice: '₹1689.00',
    avgForecast: '₹1646.94',
    range: '₹1627.97 - ₹1686.33',
    trend: '-3.46%',
    peakMonth: 'July 2025',
    lowMonth: 'June 2028',
    farmers: {
      outlook: 'STABLE',
      bestSelling: 'July 2025 onwards',
      avoidSelling: 'June 2028 onwards',
      seasonalAdvice: [
        'Kharif Harvest (Oct-Nov): Prices typically lower; consider bulk storage',
        'Rabi Harvest (Mar-Apr): Generally higher prices due to lower supply',
        'May-Jun: Historically highest prices; prioritize sales during this period if possible'
      ]
    },
    traders: {
      volatility: '₹487.09 (HIGH)',
      arbitrage: 'N/A',
      inventory: 'Accumulate Jun-Sep, Liquidate Jul-Apr'
    },
    policy: {
      security: 'Stable/Growing Production Expected',
      regulation: 'MODERATE: Continue regular market monitoring'
    }
  },
  'West Bengal': {
    currentPrice: '₹1959.00',
    avgForecast: '₹2425.76',
    range: '₹2070.22 - ₹2977.15',
    trend: '+35.58%',
    peakMonth: 'November 2026',
    lowMonth: 'August 2025',
    farmers: {
      outlook: 'POSITIVE',
      bestSelling: 'November 2026 onwards',
      avoidSelling: 'August 2025 onwards',
      seasonalAdvice: [
        'Kharif Harvest (Oct-Nov): Prices typically lower; consider bulk storage',
        'Rabi Harvest (Mar-Apr): Generally higher prices due to lower supply',
        'May-Jun: Historically highest prices; prioritize sales during this period if possible'
      ]
    },
    traders: {
      volatility: '₹533.86 (HIGH)',
      arbitrage: '₹906.93 (Moderate to High)',
      inventory: 'Accumulate Aug-Sep, Liquidate Nov-Apr'
    },
    policy: {
      security: 'Stable/Growing Production Expected',
      regulation: 'HIGH PRIORITY: Implement price stabilization mechanisms'
    }
  },
  'Tamil Nadu': {
    currentPrice: '₹1722.00',
    avgForecast: '₹1741.81',
    range: '₹1553.96 - ₹2072.93',
    trend: '-8.04%',
    peakMonth: 'December 2025',
    lowMonth: 'January 2028',
    farmers: {
      outlook: 'NEGATIVE',
      bestSelling: 'December 2025 onwards',
      avoidSelling: 'January 2028 onwards',
      seasonalAdvice: [
        'Kharif Harvest (Oct-Nov): Prices typically lower; consider bulk storage',
        'Rabi Harvest (Mar-Apr): Generally higher prices due to lower supply',
        'May-Jun: Historically highest prices; prioritize sales during this period if possible'
      ]
    },
    traders: {
      volatility: '₹648.97 (HIGH)',
      arbitrage: '₹518.97 (Moderate to High)',
      inventory: 'Accumulate Jan-Sep, Liquidate Dec-Apr'
    },
    policy: {
      security: 'Declining Price Signal: Farmers may reduce production',
      regulation: 'HIGH PRIORITY: Implement price stabilization mechanisms'
    }
  },
  'Utar Pradesh': {
    currentPrice: '₹2281.00',
    avgForecast: '₹2495.59',
    range: '₹2325.75 - ₹2593.54',
    trend: '+4.03%',
    peakMonth: 'September 2026',
    lowMonth: 'January 2025',
    farmers: {
      outlook: 'STABLE',
      bestSelling: 'September 2026 onwards',
      avoidSelling: 'January 2025 onwards',
      seasonalAdvice: [
        'Kharif Harvest (Oct-Nov): Prices typically lower; consider bulk storage',
        'Rabi Harvest (Mar-Apr): Generally higher prices due to lower supply',
        'May-Jun: Historically highest prices; prioritize sales during this period if possible'
      ]
    },
    traders: {
      volatility: '₹1358.40 (HIGH)',
      arbitrage: 'N/A',
      inventory: 'Accumulate Jan-Sep, Liquidate Sep-Apr'
    },
    policy: {
      security: 'Stable/Growing Production Expected',
      regulation: 'MODERATE: Continue regular market monitoring'
    }
  }
};