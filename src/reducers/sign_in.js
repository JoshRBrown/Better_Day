import {SIGN_IN} from '../actions/index';
import _ from 'lodash';


export default function(state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return _.mapKeys(action.payload.data, 'user_id');
    default: 
      return state;
  }
}