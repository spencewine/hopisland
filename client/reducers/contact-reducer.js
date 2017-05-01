import {SEND_THANK_YOU} from '../constants';


const initialState = {
  thankYouMessage: ''
};

export default function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

  case SEND_THANK_YOU:
    newState.thankYouMessage = action.message;
    break;
  default:
    return state;

  }

  return newState;
}
