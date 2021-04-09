import React, { Component } from "react";
import { getEmployees, getWorklog } from "./api";

class App extends Component {
  state = {
    loading: true,
    employees: [],
    worklog: []
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return "Loading...";
    }

    return <div></div>;
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }
}

export default App;
