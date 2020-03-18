import React, { Component } from "react";
import { Link } from "react-router-dom";
var APIcall = require("../../congfiguration/BookStoreCallAPI");


class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      EMAIL: '',
      PASSWORD: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

   handleSubmit(e) {
    e.preventDefault();
     var adminData = {
      "EMAIL":  this.state.EMAIL,
      "PASSWORD": this.state.PASSWORD       
    }
    APIcall.getLogin(adminData)
    .then(res =>{
      console.log('responce comming from  getLogin',res);
    })

    // console.log("The form was submitted with the following data:");
    // console.log(this.state);
  }

  // login(){
  //   console.log('gone to login');
    
  //   // var data = {
  //   //   EMAIL: this.state.EMAIL,
  //   //   PASSWORD: this.state.PASSWORD       
  //   // }
  //   // APIcall.getLogin(data)
  //   // .then(res =>{
  //   //   console.log(res);
  //   // })
  // }

  render() {
    console.log(this.state.EMAIL);
    
    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="text"
               id="email" 
              className="FormField__Input"
              placeholder="Enter your email"
               name="EMAIL"
              value={this.state.EMAIL}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="PASSWORD"
              value={this.state.PASSWORD}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign In</button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
