import React from 'react';
import Shelf from './Shelf';

//this component takes the raw current book list and divides it btwn shelves
//each new set of data is passed to the SHELF component

class BooksDisplay extends React.Component{
	render(){
        const currentBooksOnShelves = this.props.currentBooksOnShelves;
        const booksCurrentlyReading = currentBooksOnShelves.filter(b => b.shelf === 'currentlyReading');
        const booksWantToRead = currentBooksOnShelves.filter(b => b.shelf === 'wantToRead');
        const booksRead = currentBooksOnShelves.filter(b => b.shelf === 'read');  		
           
        return(
            <div>
                <Shelf categoryBooks={booksCurrentlyReading} categoryTitle={'Currently Reading'} changeShelf={this.props.changeShelf}/>
                <Shelf categoryBooks={booksWantToRead} categoryTitle={'Want to Read'} changeShelf={this.props.changeShelf}/>
                <Shelf categoryBooks={booksRead} categoryTitle={'Read'} changeShelf={this.props.changeShelf}/>            
            </div>           
        );
  }
}

export default BooksDisplay;











