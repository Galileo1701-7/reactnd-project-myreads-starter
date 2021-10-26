import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';


//the SEARCH page is for adding books to your shelf
//this page launches a search API and runs the result through a function on APPS to update the shelf information.
//the result is handed to the SHELF component for display

class Search extends React.Component{
    state = {
        query: '',
        results:[]
    }
    

    updateQuery = (query ) => {
        console.log('query =', query);
        this.setState({query: query})
        this.queryBooks(query);
    }

    queryBooks = queryText => {
        BooksAPI.search(queryText).then(resp => this.setState({ results: resp }))
        
        
    }

	render() {
        console.log('results =', this.state.results);
    	return(
          
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close search' to='/'>
                        <button className="close-search" >Return Home</button>
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
                   <Shelf categoryBooks={this.state.results} categoryTitle={''} changeShelf={this.props.changeShelf}/>
                </div>
            </div>
       
        )    
    }
}


export default Search;






