import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'
import Table from '../utils/Table'

export default class List extends Component {
  state = {
    posts: [],
  }

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
    axios('https://jsonplaceholder.typicode.com/posts').then(({ data }) =>
      this.setState({ posts: data })
    )
  }

  render() {
    return <div>
        <Table data={this.state.posts} columns={this.columns} />
    </div>
  }
}
