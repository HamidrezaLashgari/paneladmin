import axios from "axios";
import React, { Component } from "react";

export default class List extends Component {


    state = {
        persons: []
    }


    componentDidMount () {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(({data}) => this.setState({persons: data}))
    }


  render() {
    return (
      <div>
          persons
      </div>
    );
  }
}
