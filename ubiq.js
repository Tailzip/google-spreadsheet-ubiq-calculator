var ubiqStatsEndpoint = 'https://whattomine.com/coins/173.json';

/**
 * Estimate UBQ mining rewards per day given a hashrate
 *
 * @param  {Number}  hashrate  Hashrate in Mh/s
 * @param  {Boolean} avg       Use 24 hours average data instead
 * @return {Number}            Estimated UBQ rewards
 */
function estimateUBQProfit(hashrate, avg) {
  if (!avg) { avg = false };

  var lastStats = getUBQNetworkStats();
  var networkHashrate = (avg ? lastStats.difficulty24 : lastStats.difficulty) / lastStats.block_time;
  var userRatio = (hashrate * 1e6) / networkHashrate;
  var blocksPerMin = 60.0 / lastStats.block_time;
  var ubiqPerMin = blocksPerMin * (avg ? lastStats.block_reward24 : lastStats.block_reward);

  var result = userRatio * ubiqPerMin * 60 * 24;

  return !isNaN(result) ? result : 0;
}

/**
 * Fetch Ubiq's network stats
 *
 * @return {Object}
 */
function getUBQNetworkStats() {
  var response = UrlFetchApp.fetch(ubiqStatsEndpoint);
  var content = response.getContentText();

  try {
    var data = JSON.parse(content);
  } catch (e) {
    Logger.log('Error while parsing response from API: ' + content);
  }

  return data;
}
