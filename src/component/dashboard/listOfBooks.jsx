import React, { Component } from "react";
import Dashboard from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/dashboard/dashboard.jsx";
import TopBar from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/topbar/navbar.js";
import Sorting from "../dropDownSorting/dropdown";
import Footer from "../footer/footer";
import Pagination from "../pagination/pagination";
// var Sortingdropdown = require("../../component/dropDownSorting/dropdown");
var APIcall = require("../../congfiguration/BookStoreCallAPI");

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ALLBOOKS: []
    };
  }

  allBooks() {
    APIcall.getAllBooks().then(res => {
      this.setState({ ALLBOOKS: res.data });
    });
  }

  handleSorting = async data => {
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };

  handleSearch = async data => {
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };

  componentWillMount() {
    this.allBooks();
  }

  render() {
    return (
      <div>
        <div basename="/react-auth-ui/">
          <div className="App__Form">
            <TopBar value={this.handleSearch} />
            <Sorting value={this.handleSorting} />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {this.state.ALLBOOKS.map((value, index) => {
                return <Dashboard key={index} value={value}></Dashboard>;
              })}
            </div>
          </div>
          <Pagination></Pagination>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default dashboard;
