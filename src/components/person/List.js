import { Table } from "antd";
import axios from "axios";
import React, { Component } from "react";

export default class List extends Component {
  state = {
    persons: [],
    loading: true,
  };

  columns = [
    { title: "شناسه", key: "id", dataIndex: "id" },
    { title: "نام", key: "name", dataIndex: "name" },
    {
      title: "آدرس",
      key: "address",
      dataIndex: "address",
      render: (field, record, index) => {
        return `${field.city}, ${field.street} | Phone:${record.phone}`;
      },
    },
  ];

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(({data}) => this.setState({persons: data}))
    .finally(()=> this.setState({loading: false}))
  }

  render() {
    return (
      <div>
        <Table
          rowKey={"id"}
          dataSource={this.state.persons}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
