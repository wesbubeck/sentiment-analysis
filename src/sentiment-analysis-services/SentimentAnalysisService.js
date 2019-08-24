const Sentiment = require('sentiment');

const sentiment = new Sentiment();
const result = sentiment.analyze('I love you sexy beast');

export function fetchSentiment() {
  return result;
}

const SentimentAnalysis = {
  fetchSentiment,
};

export default SentimentAnalysis;
