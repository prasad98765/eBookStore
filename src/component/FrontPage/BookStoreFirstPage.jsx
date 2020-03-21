import React, { Component } from "react";
import ListOfBooks from "../dashboard/listOfBooks";
import TopBar from "../topbar/navbar";
import Sorting from "../dropDownSorting/dropdown";
import Dropdown from '../../component/dropDownSorting/dropdown'
var APIcall = require("../../congfiguration/BookStoreCallAPI");
class BookStoreFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      ALLBOOKS: [],
      noOfRecord: null
    };
  }

  allBooks() {
    APIcall.getAllBooks({ page: this.state.page }).then(res => {
      this.setState({ ALLBOOKS: res.data });
    });
  }

  getNoCount() {
    APIcall.getNoOFBookCount().then(res => {
      console.log("in get no of count books---------->", res.data.data);
      this.setState({ noOfRecord: res.data.data });
    });
  }
  componentWillMount() {
    this.allBooks();
    this.getNoCount();
  }
  handleSearch = async data => {
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };

  handleSorting = async data => {
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };

  handleChange = async (event, value) => {
    await this.setState({ page: value });
    this.allBooks();
  };

  render() {
    return (
      <div>
        <TopBar bookList={this.state.ALLBOOKS} value={this.handleSearch} />
        <Sorting bookList={this.state.ALLBOOKS} bookcount = {this.state.noOfRecord} value={this.handleSorting} />
        <ListOfBooks
          bookList={this.state.ALLBOOKS}
          handleChange={this.handleChange}
          noOfRecord={this.state.noOfRecord}
        />
      </div>
    );
  }
}
export default BookStoreFirstPage;
