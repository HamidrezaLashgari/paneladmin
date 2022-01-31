import { Divider } from 'antd'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPost } from 'actions/post'

export default function Full() {
  const { id } = useParams()

  const dispatch = useDispatch()

  const post = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [id, dispatch])

  return (
    <div>
      <h3>نمایش پست</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type="vertical" />
      <span>{post.title}</span>
      <Divider />
      <label>متن:</label>
      <Divider type="vertical" />
      <span>{post.body}</span>
      <Divider />
      <Link to="/posts">بازگشت به لیست مقاله ها</Link>
    </div>
  )
}


