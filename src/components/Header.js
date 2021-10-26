import React from 'react'

//this component contains the top header bar (probably not needed as the code is only used once)
  
class Header extends React.Component{
	render(){
  		return(
           <div className="list-books-title">
              <h1>E Allen Haswell -  MyReads</h1>
            </div>
        );
  }
}

export default Header;