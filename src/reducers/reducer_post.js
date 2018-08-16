import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log(action.payload.data)
      return _.mapKeys(action.payload.data, 'post_id');
    case FETCH_POST:
    const post = action.payload.data;
      return {...state, [post.post_id]: post};
    case DELETE_POST:
      return _.omit(state, action.payload); 
    }
    return state;
};

