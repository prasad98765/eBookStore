import React, { Component } from "react";
import Dashboard from "/home/admin1/Desktop/addBook/eBookStoreUi/src/component/dashboard/dashboard.jsx";
import Footer from "../footer/footer";
import Pagination from '@material-ui/lab/Pagination';
var APIcall = require("../../congfiguration/BookStoreCallAPI");

class dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div>
        <div basename="/react-auth-ui/">
          <div className="App__Form">
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {this.props.bookList.map((value, index) => {
                return <Dashboard key={index} value={value}></Dashboard>;
              })}
            </div>
          </div>
          <Pagination shape = "rounded" className = "pagination" count={Math.ceil(this.props.noOfRecord / 12)}
            onChange = {this.props.handleChange}/>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default dashboard;
