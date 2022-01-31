import { createReducer } from '@reduxjs/toolkit'
import { setPosts, setPost } from '../actions/post'



export const posts = createReducer([], {
  [setPosts]: (state, {payload}) => payload,
})

export const post = createReducer([], {
  [setPost]: (state, {payload}) => payload,
})

// export function posts(state = {}, action) {
//   switch (action.type) {
//     case 'POSTS':
//       return action.payload

//     default:
//       return state
//   }
// }

// export function post(state = {}, action) {
//   switch (action.type) {
//     case 'POST':
//       return action.payload

//     default:
//       return state
//   }
// }
