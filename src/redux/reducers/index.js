import { combineReducers } from 'redux'
import { persons } from './person'
import { posts } from './post'
export default combineReducers({
  persons,
  posts,
})
