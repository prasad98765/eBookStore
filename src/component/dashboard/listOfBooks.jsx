import React, { Component } from "react";
import Dashboard from "../dashboard/dashboard";
import Footer from "../footer/footer";
import Pagination from "@material-ui/lab/Pagination";
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
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "20px",
                marginLeft: "100px",
                marginTop: "-40px"
              }}
            >
              {this.props.bookList.map((value, index) => {
                return <Dashboard key={index} value={value}></Dashboard>;
              })}
            </div>
          </div>
          <Pagination
            shape="rounded"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              marginBottom: "20px"
            }}
            count={Math.ceil(this.props.noOfRecord / 12)}
            onChange={this.props.handleChange}
          />
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
export default dashboard;
