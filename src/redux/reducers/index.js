import { combineReducers } from 'redux'
import { persons } from './person'
import { posts, post } from './post'
import { user, isLoggedIn, userIsLoading } from './user'

export default combineReducers({
  persons,
  posts,
  post,
  user,
  isLoggedIn,
  userIsLoading
})
