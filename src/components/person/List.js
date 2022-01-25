import { Table } from "antd";
import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

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
    {
      title: "",
      key: "actions",
      dataIndex: "actions",
      render: (f, r) =>(
          <Link to={`/persons/${r.id}`}>
            <EyeOutlined />
          </Link>
        )
    }
  ]

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => this.setState({ persons: data }))
      .finally(() => this.setState({ loading: false }));
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
