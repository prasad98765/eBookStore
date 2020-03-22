import React, { Component } from "react";
import ListOfBooks from "../dashboard/listOfBooks";
import TopBar from "../topbar/navbar";
import Sorting from "../dropDownSorting/dropdown";
import Dropdown from '../../component/dropDownSorting/dropdown'
import { withRouter } from 'react-router-dom';

var APIcall = require("../../congfiguration/BookStoreCallAPI");
class BookStoreFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      ALLBOOKS: [],
      noOfRecord: null,
      addToCart : new Map(),
      count:0
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
  addToCart = (value) => {
    console.log("check the add to cart button");
  
    
    this.props.history.push( { pathname : '/addToCart', state: this.state.addToCart })
  }
  // login = (value) =>{
    
  //   this.props.history.push( { pathname : '/login', state: this.state.addToCart })
  // }
  getBookToaddToCart = (value) => {
    // var books = new Map()
    // books.set(value.Title,value)
    // console.log("mapppppp",books);
    this.setState({ addToCart:value });
    this.setState({ count:this.state.count +1  });
    console.log("in Book Store Fiast Page",value);
  }

  render() {
    console.log("in book Store First Page",this.state.count);
    
    return (
      <div>
        <TopBar bookList={this.state.ALLBOOKS} value={this.handleSearch} value1 = {this.addToCart} count = {this.state.count} login ={this.login}  />
        <Sorting bookList={this.state.ALLBOOKS} bookcount = {this.state.noOfRecord} value={this.handleSorting} />
        <ListOfBooks
          bookList={this.state.ALLBOOKS}
          handleChange={this.handleChange}
          getBookToaddToCart={this.getBookToaddToCart}
          noOfRecord={this.state.noOfRecord}
        />
      </div>
    );
  }
}
export default withRouter(BookStoreFirstPage);
