import {
  LOAD_RANDOM_QUOTE,
} from '../constants/quotes';
import quotes from '../assets/quotes';

export function loadRandomQuote() {
  return {
    type: LOAD_RANDOM_QUOTE,
    quote: getRandomQuote(),
  };
}

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
