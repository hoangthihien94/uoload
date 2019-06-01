import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';


class App extends Component {
  render() {
    return (
      <div>
       <Header/>
       <div className="SearchForm">
       <div className="container">
        <Search/>
        <div className="col-12">
        <div className="row">
        <TableData/>
        <AddUser/>
        </div>
        </div>
       </div>
       </div>
      </div>
    );
  }
}

export default App;
