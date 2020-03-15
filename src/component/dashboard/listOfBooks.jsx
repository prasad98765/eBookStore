import React, { Component } from "react";
import Dashboard from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/dashboard/dashboard.jsx";
import TopBar from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/topbar/navbar.js";
import Sorting from "../dropDownSorting/dropdown";

class dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log();

    return (
      <div basename="/react-auth-ui/">
        <div className="App__Form">
          <TopBar />
          <Sorting />
          <Dashboard></Dashboard>
          <Dashboard></Dashboard>
        </div>
      </div>
    );
  }
}
export default dashboard;
