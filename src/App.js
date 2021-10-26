import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from "./components/Home"; 
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './components/Search';
//import {shelfChangeExisting} from './util/changeShelves'

class BooksApp extends React.Component {
  state = {
    currentBooksOnShelves: []
  }

  //change the shelf of book (from dropdown on SHELF component)
  //check to see if the book is on the shelf, if so update it... if not add the book with updated shelf
  changeShelf = (book, newShelf) => {
    const shelvedBook = this.state.currentBooksOnShelves.find(
      shelvedBook => shelvedBook.id === book.id      
    );
    console.log('shelved book =', shelvedBook);
      if (shelvedBook) {
        //shelfChangeExisting(book, newShelf, BooksAPI);
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
        console.log(book.title, ' is not currently on any shelf. Moving to ', newShelf);
        //update backend
        BooksAPI.update(book,newShelf);
         //update State
        this.setState(({ currentBooksOnShelves }) => {         
          book.shelf = newShelf;
          currentBooksOnShelves.push(book);
          return {currentBooksOnShelves: currentBooksOnShelves};
        });
        
      }  
  } 
  
  //on page load, this code gets the current book/shelf info from the backend
  componentDidMount(){
    BooksAPI.getAll().then(resp => this.setState({ currentBooksOnShelves: resp }))
    
  }; 

  

  render() {
    //console.log('app.js =',this.state.currentBooksOnShelves); 


    return (
      <BrowserRouter>
        <div className="app">
        <Route exact path='/' render={() => (
          <Home 
            currentBooksOnShelves={this.state.currentBooksOnShelves}
            changeShelf={this.changeShelf}/>
        )}/>
        <Route path='/search' render={({ history }) => (
        	<Search changeShelf={this.changeShelf}/>        
        )}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
