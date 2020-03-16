import React, { Component } from "react";
import "../textField/textField.css";
// var APIcall = require('../../congfiguration/BookStoreCallAPI');
// var Dashboard = require('../dashboard/dashboard')
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TITLE: "",
      AUTHOR: "",
      YEAR: "",
      RATING: "",
      PRICE: 89,
      DESCRIPTION: "",
      FILE: null,
      IMAGEPATH: "",
      // GIVEN_TITLE:"cfvgbhnjmkl",
      // GIVEN_AUTHOR:"",
      // GIVEN_YEAR:"",
      // GIVEN_PRICE:"",
      // GIVEN_DESCRIPTION:"",
      // GIVEN_IMAGEPATH:"",
      COUNT: 0,
      show: true
    };
  }

  gettitle = event => {
    this.setState({ TITLE: event.target.value });
  };
  getauthor = event => {
    this.setState({ AUTHOR: event.target.value });
  };
  getyear = event => {
    this.setState({ YEAR: event.target.value });
  };
  getrating = event => {
    this.setState({ RATING: event.target.value });
  };
  getprice = event => {
    this.setState({ PRICE: event.target.value });
    console.log(this.state.PRICE);
  };
  getdescription = event => {
    this.setState({ DESCRIPTION: event.target.value });
  };
  getfile = async event => {
    console.log("select--> ", event.target.files[0]);
    this.setState({ FILE: event.target.files[0] });
    // const filePath = {
    //   FILE_PATH: await this.state.FILE
    // };
    event.preventDefault();
    const formData = new FormData();
    formData.append("filePath", this.state.FILE);
    console.log("formData", formData);

    // APIcall.getImagePath(formData).then(res => {
    //   console.log("res in file upload--> ", res.data);
    //   this.setState({ IMAGEPATH: res.data });

    // });
  };
  getfilepath = () => {
    console.log("in file Path", this.state.FILE);
  };
  increment=async()=> {
    await this.setState(
      previousState=>{
        this.setState({COUNT: previousState.COUNT +1})
      })    
  }

  decrement=async()=> {
    if(this.state.COUNT>0){
     this.setState(
      previousState=>{
        this.setState({COUNT: previousState.COUNT -1})
      })    
    }
  }

  getbookdetails = () => {
    console.log("call to submit");

    const bookDetails = {
      TITLE: this.state.TITLE,
      AUTHOR: this.state.AUTHOR,
      YEAR: this.state.YEAR,
      RATING: this.state.RATING,
      PRICE: this.state.PRICE,
      DESCRIPTION: this.state.DESCRIPTION,
      IMAGEPATH: this.state.IMAGEPATH
    };

    console.log("book details object", bookDetails);

    // APIcall.BookDetails(bookDetails)
    //   .then(res => {
    //       console.log("save book in data base ---------------->",res.data);

    //   })
    //   .catch(err => {
    //     console.log("err while submitting--> ", err);
    //   });
  };
  getCountIncrement = () => {
    this.setState({
      COUNT: this.state.COUNT + 1
    });
  };

  render() {
    console.log(this.state.COUNT);
    
    console.log("==>", this.state.GIVEN_TITLE);
    return (
      <div className="fullBG">
        <br></br>
        <div className="FormCenter">
          <form>
            <div className="FormFields">
              <h1 style={{ color: "white", fontSize: "large" }}>
                Book Details
              </h1>
            </div>
            <br></br>
            <br></br>
            <div className="FormField">
              <label className="FormField__Label">Title</label>
              <input
                value={this.state.value}
                onChange={this.gettitle}
                type="title"
                className="FormField__Input"
                placeholder="Enter book title name"
                name="title"
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Author</label>
              <input
                value={this.state.value}
                onChange={this.getauthor}
                type="Author"
                className="FormField__Input"
                placeholder="Enter book author name"
                name="author"
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Year</label>
              <input
                value={this.state.value}
                onChange={this.getyear}
                type="Year"
                className="FormField__Input"
                placeholder="Enter book published year"
                name="year"
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Price</label>
              <input
                value={this.state.value}
                onChange={this.getprice}
                type="Price"
                className="FormField__Input"
                placeholder="Enter book price"
                name="price"
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Rating</label>
              <input
                value={this.state.value}
                onChange={this.getrating}
                type="rating"
                className="FormField__Input"
                placeholder="Rating of book"
                name="rating"
              />
            </div>

            <div className="FormField">
              <label className="FormField__Label">Description</label>
              <input
                value={this.state.value}
                onChange={this.getdescription}
                type="Description"
                className="FormField__Input"
                placeholder="Enter book description"
                name="descrition"
              />
            </div>
            </form>
            <div className="FormField">
              <div style={{ fontSize: 10, color: "white",marginTop:-50}}>
              {" "}
                Number Of Books
              </div>
              <div style={{marginTop:10}}>
              <button style={{fontSize:"medium"}} onClick={this.decrement}>-</button>
              <button style={{fontSize:"medium"}}>{this.state.COUNT}</button>
              <button style={{fontSize:"medium"}} onClick={this.increment}>+</button>
              </div>
            </div>

            <div className="FormField">
              <input
                accept="image/*"
                type="file"
                value={this.state.value}
                onChange={this.getfile}
              />
            </div>
          <div className="FormField">
            <button
              type="submit"
              className="FormField__Button mr-20"
              onClick={this.getbookdetails}
            >
              Submit
            </button>
            {/* <Dashboard count = {this.state.COUNT}/> */}
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

export default SignUpForm;

