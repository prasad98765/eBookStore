import React from 'react';
import './App.css';
import Navbar from './component/navbar'
//  import CustomerDetail from './customerDetail/customerdetail'
import CustomerDetail from './customerDetail/custDetail'
function App() {
  return (
    <div className="App" style={{ marginLeft: "5%", marginRight: "5%" }}>
      <Navbar />
      <CustomerDetail />
     
    </div>
  );
}

export default App;
