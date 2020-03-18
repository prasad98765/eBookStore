import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var APIcall = require("../../congfiguration/BookStoreCallAPI");

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            EMAIL: '',
            PASSWORD: '',
            NAME: '',
            CONTACT:"",
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    getFullName(event){
      this.setState({NAME:event.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        var data = {
          NAME: this.state.NAME,
          EMAIL: this.state.EMAIL,
          PASSWORD: this.state.PASSWORD,
          CONTACT: this.state.CONTACT        
  
        }
        APIcall.adminDetails(data)
        .then(res =>{
          console.log(res);
        })
    }
    // getAdminDetails(){
    //   // var data = {
    //   //   NAME: this.state.NAME,
    //   //   EMAIL: this.state.EMAIL,
    //   //   PASSWORD: this.state.PASSWORD,
    //   //   CONTACT: this.state.CONTACT        

    //   // }
    //   // APIcall.adminDetails(data)
    //   // .then(res =>{
    //   //   console.log(res);
    //   // })
    // }

    render() {
      console.log(this.state.NAME);
      console.log(this.state.PASSWORD);
      
      
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type='text' id="name" className="FormField__Input" placeholder="Enter your full name" name="NAME" value={this.state.NAME} onChange={this.handleChange}  />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="text" id="password" className="FormField__Input" placeholder="Enter your password" name="PASSWORD" value={this.state.PASSWORD} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="text" id="email" className="FormField__Input" placeholder="Enter your email" name="EMAIL" value={this.state.EMAIL} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phone_number">Phone Number</label>
                <input type="text" id="phome_number" className="FormField__Input" placeholder="Enter phone number" name="CONTACT" value={this.state.CONTACT} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              
              <div className="FormField">
                  <button className="FormField__Button mr-20" onChange={this.getAdminDetails}>Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;