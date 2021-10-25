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

  //change the shelf of book (from dropdown on SHELF component)
  changeShelf = (book, newShelf) => {
    const shelvedBook = this.state.currentBooksOnShelves.find(
      shelvedBook => shelvedBook.id === book.id      
    );
    console.log('shelved book =', shelvedBook);
      if (shelvedBook) {
        console.log('change shelf of ', book, ' to ', newShelf);
        //update book on backend
        BooksAPI.update(book,newShelf);
        //update book in state
        this.setState(({ currentBooksOnShelves }) => ({
          currentBooksOnShelves: currentBooksOnShelves.map(function (shelvedBook) {
            if (shelvedBook.id === book.id) {
              shelvedBook.shelf = newShelf;
            } 
            return shelvedBook;
          })
      }));    
      } else {
        console.log('This book is not on any shelf');
      }  
  } 
  
  //on page load, this code gets the current book/shelf info from the backend
  componentDidMount(){
    BooksAPI.getAll().then(resp => this.setState({ currentBooksOnShelves: resp }))
    
  }; 

  

  render() {
    console.log('app.js =',this.state.currentBooksOnShelves); 


    return (
      <BrowserRouter>
        <div className="app">
        <Route exact path='/' render={() => (
          <Home 
            currentBooksOnShelves={this.state.currentBooksOnShelves}
            changeShelf={this.changeShelf}/>
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
