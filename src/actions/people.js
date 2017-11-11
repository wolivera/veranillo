import {
  LOAD_PEOPLE,
} from '../constants/people';
import members from '../assets/people';

export function loadPeople() {
  return {
    type: LOAD_PEOPLE,
    members: members
  };
}
