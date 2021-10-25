import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from "./components/Home"; 
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
        <Route exact path='/' render={() => (
          <Home />
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
