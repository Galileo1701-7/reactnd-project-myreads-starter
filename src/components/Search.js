import React from 'react';
import { Link } from 'react-router-dom';


//the MAIN page is the home page for th app... it combines the header with the display of the book shelves
class Search extends React.Component{
    state = {
        query: ''
    }

    updateQuery = (query ) => {
        console.log('query =', query);
        this.setState({query: query})
    }

	render() {
    	return(
          
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close search' to='/'>
                        <button className="close-search" >Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                    {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                
                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    
                    <input 
                        type="text" 
                        value={this.state.query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                        placeholder="Search by title or author"
                    />
                
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
       
        )    
    }
}


export default Search;






