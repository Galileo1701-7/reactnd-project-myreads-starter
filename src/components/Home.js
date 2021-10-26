import React from 'react';
import SearchButton from './SearchButton';
import Header from './Header';
import BooksDisplay from './BooksDisplay';


//the HOME page for the app... it combines the header with the display of the book shelves
class Home extends React.Component{

	render() {
        //console.log('home.js =',this.props.currentBooksOnShelves);

    	return(
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <BooksDisplay 
                currentBooksOnShelves={this.props.currentBooksOnShelves}
                changeShelf={this.props.changeShelf}/>
          </div>
          <div className="open-search">
            <SearchButton />
          </div>
        </div>
      )}
            
    }


export default Home; 