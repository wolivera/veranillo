import {
  LOAD_RANDOM_QUOTE,
  LOAD_QUOTE,
} from '../constants/quotes';
import quotes from '../assets/quotes';

export function loadRandomQuote() {
  return {
    type: LOAD_RANDOM_QUOTE,
    quote: getRandomQuote(),
  };
}

export function loadQuote(idx) {
  return {
    type: LOAD_QUOTE,
    quote: getQuoteByIndex(idx),
  };
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getQuoteByIndex(idx) {
  return quotes[idx % quotes.length];
}
