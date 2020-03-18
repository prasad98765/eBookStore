import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "../component/adminLogin/SignInForm";
import ListOfBook from "../component/dashboard/listOfBooks";

export default function abc() {
  return (
    <Router>
      <div>
      <Route path="/" component={ListOfBook} />
      <Route path="/adminlogin" component={Login} />
      </div>
    </Router>
  );
}
