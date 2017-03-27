import {TOGGLE_CLICK} from '../constants';


export const toggleClick = (field) => {
  return {
    type: TOGGLE_CLICK,
    field
  };
};
