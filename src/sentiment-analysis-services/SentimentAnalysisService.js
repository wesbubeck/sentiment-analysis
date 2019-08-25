const Sentiment = require('sentiment');

const sentiment = new Sentiment();

export function fetchSentiment(text) {
  return sentiment.analyze(text);
}

const SentimentAnalysis = {
  fetchSentiment,
};

export default SentimentAnalysis;
