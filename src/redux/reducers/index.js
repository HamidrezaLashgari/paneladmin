import { combineReducers } from 'redux'
import { persons } from './person'
import { posts, post } from './post'
export default combineReducers({
  persons,
  posts,
  post
})
