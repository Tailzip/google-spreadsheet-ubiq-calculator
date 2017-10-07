## Installation
Add a new Google Script to existing spreadsheet, and paste `ubiq.js` file content in.

See [Custom Functions in Google Sheets](https://developers.google.com/apps-script/guides/sheets/functions) for more details.

## Usage
|     | A                              | B                                                                |
| --- | ------------------------------ | ---------------------------------------------------------------- |
|  1  | `=estimateUBQProfit(20)`       | ***20 Mh/s** hashrate using **current network difficulty**.*     |
|  2  | `=estimateUBQProfit(40; true)` | ***40 Mh/s** hashrate using **24h average network difficulty**.* |

## Data
Ubiq's network data is provided by [WhatToMine](https://whattomine.com/coins/173.json).