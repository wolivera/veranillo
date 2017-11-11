import { combineReducers } from 'redux';

import people from './people';
import navigation from './navigation';
import quotes from './quotes';

export default combineReducers({
  navigation,
  people,
  quotes,
});
