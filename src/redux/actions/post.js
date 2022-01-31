import { createAction } from '@reduxjs/toolkit'
import request from '../../tools/request'


export const setPosts = createAction('POSTS')
export const setPost = createAction('POST')


// export function setPosts(payload) {
//   return {
//     type: 'POSTS',
//     payload,
//   }
// }

// export function setPost(payload) {
//   return {
//     type: 'POST',
//     payload,
//   }
// }

export const getPost = (id) => (dispatch) =>
  request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))

export function getPosts() {
  return (dispatch) => {
    request('/posts').then(({ data }) => dispatch(setPosts(data)))
  }
}
