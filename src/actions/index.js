export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post'
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const SIGN_IN = 'sign_in';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';
// const API_KEY = '?key=BALLOON1234';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/post`, values)
    .then(() => callback())
  return {
    type: CREATE_POST,
    payload: request
  }
}


export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}

export function signIn(user, callback) {
  const request = axios.post(`${ROOT_URL}/user`, user)
    .then((data) => {
      callback()
      return(data)
    })
    
  return {
    type: SIGN_IN,
    payload: request
  }
}