import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewsList from './components/NewsList/NewsList';
class App extends Component {
  render() {
    return (
     <React.Fragment>
        <Navbar/>
        <NewsList/>
     </React.Fragment>
    );
  }
}
export default App;
