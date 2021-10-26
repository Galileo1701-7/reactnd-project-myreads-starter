import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';


//the SEARCH page is for adding books to your shelf
//this page launches a search API and runs the result through a function on APPS to update the shelf information.
//the result is handed to the SHELF component for display

class Search extends React.Component{
    state = {
        query: ''
    }
    

    updateQuery = (query) => {
        console.log('query =', query);
        this.setState({query: query});
        if(query===''){
            this.props.emptySearchResults(); return;
        }else{
            this.queryBooks(query);
        }
    }
    



    queryBooks = (queryText) => {        
        BooksAPI.search(queryText).then(result =>{
            console.log('result now =',result);
            //if(this.state.query!==''){
            if(result){this.props.updateSearchResultsWithShelfStatus(result)}
            //}
        })
        .catch((errors) => {
            //catch errors
            console.log('caught error=',errors);
            this.props.emptySearchResults();
        });  
    }

    // on mount, clear query and results... 
    componentDidMount() {
    this.setState({query: ''});    
    this.props.emptySearchResults();
  }

	render() {
        //this code is a workaround to avoid showing queries in progress AFTER blanking out the search bar...
        // I dont know how to you debounce yet! :) 
        const displayTheBooks = (this.state.query ==='') ? 
            <h2>Enter a search term above...</h2> 
            : <Shelf categoryBooks={this.props.searchResults} categoryTitle={''} changeShelf={this.props.changeShelf}
        />;
        
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
                {displayTheBooks}
                </div>
            </div>
       
        )    
    }
}


export default Search;






