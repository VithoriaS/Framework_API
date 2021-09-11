import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Albuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      id: 1,
      title: "",
      completed: false,
    };
  }
  async getAlbunsData() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    console.log(res.data);
    this.setState({ loading: false, albuns: res.data });
  }
  componentDidMount() {
    this.getAlbunsData();
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
        Header: "Completed",
        accessor: "completed",
      },
    ];
    return (
      <>
        <ReactTable data={this.state.albuns} columns={columns} />
      </>
    );
  }
}
