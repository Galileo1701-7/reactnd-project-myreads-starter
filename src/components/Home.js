import React from 'react';
import SearchButton from './SearchButton';
import Header from './Header';
import BooksDisplay from './BooksDisplay';





//the MAIN page is the home page for th app... it combines the header with the display of the book shelves
class Home extends React.Component{
    
    
    


	render() {
        console.log('home.js =',this.props.currentBooksOnShelves);

    	return(
                <div className="list-books">
                  <Header />
                  <div className="list-books-content">
                    <BooksDisplay currentBooksOnShelves={this.props.currentBooksOnShelves}/>
                  </div>
                  <div className="open-search">
                   <SearchButton />
                  </div>
                </div>
              )}
            
       
            
    }


export default Home; 