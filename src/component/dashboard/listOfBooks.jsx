import React, { Component } from "react";
// import Dashboard from "/home/admin1/Desktop/addBookeBookStoreUi/src/component/dashboard/dashboard.jsx";
// import TopBar from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/topbar/navbar.js";
import TopBar  from '../topbar/navbar'
import Sorting from "../dropDownSorting/dropdown";
// var Dashboard = require('../dashboard/dashboard')
import Dashboard from '/home/admin1/Desktop/gitCloneData/eBookStoreUi/src/component/dashboard/dashboard'
// var Sortingdropdown = require("../../component/dropDownSorting/dropdown");
import Footer from '../footer/footer'
import Pagination from '../pagination/pagination'
var APIcall = require("../../congfiguration/BookStoreCallAPI");

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // SORTDATA : [],
      ALLBOOKS: []

    };
    // this.handleSorting = this.handleSorting.bind(this)
  }

  allBooks() {
    APIcall.getAllBooks().then(res => {
      console.log("in sadhboard========>", res.data);
      this.setState({  ALLBOOKS: res.data });
    });
  }

  handleSorting = async (data) => {
    console.log("in parent list of-------------->", data);
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };

  handleSearch = async (data) => {
    console.log("in parent list search of-------------->", data);
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };
  

  componentWillMount() {
    this.allBooks();
  }

  render() {
    console.log("sorted data-------------->", this.state.ALLBOOKS);
    // let books = this.state.ALLBOOKS.map((value,index)=>{
    //   return(
    //     <Dashboard key = {index} value = {value} ></Dashboard>
    //   )
    // })
    // console.log("in render method--------->",books[0]);
    return (
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
        <Pagination/>
        <Footer/>
      </div>
    );
  }
}
export default dashboard;
