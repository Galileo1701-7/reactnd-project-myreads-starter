import React from 'react'

//this component contains the code for constructing each shelf

class Shelf extends React.Component{
	render(){
        console.log('shelf currently reading =',this.props.categoryBooks);
        const categoryTitle = this.props.categoryTitle;
        const categoryBooks = this.props.categoryBooks;

  		return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{categoryTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">

                {categoryBooks.map(b => (
                    <li key={b.id}>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${b.imageLinks.smallThumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select value={b.shelf} onChange={e => this.props.changeShelf(b, e.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                        </div>
                        <div className="book-title">{b.title}</div>
                        <div className="book-authors">{b.authors}</div>
                    </div>
                    </li>   
                ))}

              </ol>
            </div>
          </div>
        );
    }
}

export default Shelf;