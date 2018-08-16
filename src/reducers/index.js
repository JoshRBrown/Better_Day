import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_post';
import SignIn from './sign_in';


const rootReducer = combineReducers({
  user: SignIn,
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
