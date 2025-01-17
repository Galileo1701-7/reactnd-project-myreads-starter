import React from 'react';
import { Link } from 'react-router-dom'

//this component combines LINK and BUTTON to provide the proper SEARCH button at the bottom of HOME page
//by using the link and ROUTE from APPS, the button opens the SEARCH page

class SearchButton extends React.Component{

	render() {
    	return(
       
        <div className="open-search">               
            <Link className='open-search' to='/search'>
                <button>Search to Add book</button>
            </Link>
        </div>
        
        )    
    }
}

export default SearchButton; 