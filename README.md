# MyReads Project

E Allen Haswell eh1622@att.com

This is my completed REACT NANO DEGREE project titled MyReads.

The premise of the project is to build an application for displaying books (from a backend via API) on one of the three shelves.
These shelves are "Currently Reading", "Want to Read", and "Read".

The application contains two pages, the HOME page and then a SEARCH page.

On the HOME page the currently shelved books are displayed and user is given a dropdown menu to reassign their shelves.
In the bottom right corner of the page, a link to the SEARCH page is available.

The search page supplies a blank TEXT bar for the user to submit a search term to locate books from a master list.
The results of any search also contain a drop down to assign them to a shelf.... any book not currently assigned a shelf will be listed as "None".

Pages I added or modified listed below....
```bash
└── src
    ├── components
    │   ├── Header.js # contains green header bar with title
    │   ├── Home.js # Main page that gathers and displays the header and the existing bookshelves
    │   ├── BooksDisplay.js # page takes the raw book shelf data and filters it between the 3 shelves
    │   ├── Search.js # uses search API and runs the result through a function on APPS to update the shelf information/then displays result
    │   ├── SearchButton.js # contains button that links HOME page to SEARCH page
    │   └── Self.js # displays each shelf and provides for the shelf reassignment option... used by both HOME and SEARCH pages       
    ├── App.js # Base page of the application, grabs initial data via API and contains most methods/function
    ├── README.md #this page
```

To install and launch this project, clone the directory and run "npm install" and "npm start".


NOTE: This is my second attempt at this project... After doing TONS of online research I had a working project, but after rereading the submition instructions again, I felt that it lacked some originality.
Not wanting to run afoul of the letter, or even the spirit of the rules... I made some notes and a flowchart of my code, deleted it, and started over.

This project may be a bit "overly notated" but I wanted to display my understanding of the code as well as have it as an example for future use! 
I left some of my debugging code (ie console.log...) in the code but commented it out. I hope that is ok...
It helped me design as I coded and will help me when I refer to this code in the future. 

I am an old PHP programmer learning JS and REACT.... Flow and concept, I understand... syntax is my challenge.

Please, go easy on me... I am way behind on my class and trying to catch up! ;)