import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from "./components/Home"; 
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    currentBooksOnShelves: []
  }

  //on page load, this code gets the current book/shlef info from the backend
  componentDidMount(){
    BooksAPI.getAll().then(resp => this.setState({ currentBooksOnShelves: resp }))
    
  }; 

  

  render() {
    console.log('app.js =',this.state.currentBooksOnShelves); 


    return (
      <BrowserRouter>
        <div className="app">
        <Route exact path='/' render={() => (
          <Home currentBooksOnShelves={this.state.currentBooksOnShelves}/>
        )}/>
        <Route path='/search' render={({ history }) => (
        	<Search />        
        )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
