import {
  LOAD_PEOPLE
} from '../constants/people';

const initialState = {
  members: false,
};

function people(state = initialState, action) {
  switch(action.type) {
    case LOAD_PEOPLE:
      return {...state, members: action.members};
    default:
      return state;
  }
  return state;
}

export default people;
