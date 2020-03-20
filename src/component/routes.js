import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import Login from "../component/adminLogin/SignInForm";
import ListOfBook from "../component/dashboard/listOfBooks";
import BookStoreFirstPage from './FrontPage/BookStoreFirstPage'

export default function abc() {
  return (
    <Router>
      <div>
      <Route path="/" component={BookStoreFirstPage} />
      {/* <Route path="/adminlogin" component={Login} /> */}
      </div>
    </Router>
  );
}

