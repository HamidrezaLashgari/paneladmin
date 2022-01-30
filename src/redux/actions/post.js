import request from '../../tools/request'

export function setPosts(payload) {
  return {
    type: 'POSTS',
    payload,
  }
}

export function getPosts() {
  return dispatch => {
    request('/posts').then(({ data }) => dispatch(setPosts(data)))
  }
}
