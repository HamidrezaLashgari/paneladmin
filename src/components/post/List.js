import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '../utils/Table'
import { connect } from 'react-redux'
import { setPosts } from '../../redux/actions/post'
import request from '../../tools/request'

class List extends Component {
  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'عنوان', key: 'title' },
    {
      key: 'actions',
      render: (f, r) => (
        <Link to={`/posts/${r.id}`}>
          <EyeOutlined />
        </Link>
      ),
    },
  ]

  componentDidMount() {
    request('/posts').then(({ data }) => this.props.setItems(data))
  }

  render() {
    return (
      <div>
        <Table data={this.props.posts} columns={this.columns} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setItems: (data) => dispatch(setPosts(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
