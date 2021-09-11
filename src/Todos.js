import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";


export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      id: 1,
      title: "",
      completed: false,
    };
  }
  async getTodosData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
    this.setState({ loading: false, todos: res.data });
  }
  componentDidMount() {
    this.getTodosData();
  }
  render() {
    const columns = [
      {
        Header: "userId",
        accessor: "userId",
      },
      {
        Header: "ID",
        accessor: "id",
      },

      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Body",
        accessor: "body",
      },
    ];
    return <ReactTable data={this.state.todos} columns={columns} />;
  }
}
