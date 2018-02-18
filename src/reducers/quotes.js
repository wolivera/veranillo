import {
  LOAD_RANDOM_QUOTE,
  LOAD_QUOTE,
} from '../constants/quotes';

const initialState = {
  quote: false,
};

function quotes(state = initialState, action) {
  switch(action.type) {
    case LOAD_RANDOM_QUOTE:
      return {...state, quote: action.quote};
    case LOAD_QUOTE:
      return {...state, quote: action.quote};
    default:
      return state;
  }
  return state;
}

export default quotes;
