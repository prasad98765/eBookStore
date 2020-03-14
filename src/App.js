import React from 'react';
import './component/dashboard/dashboard.css';
import Card from './component/dashboard/dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="cardList">
       <Card ></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       <Card></Card>
       </div>
      </header>
    </div>
  );
}

export default App;
