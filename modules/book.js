
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  class BookList {
    static getBooks = () => {
      let bookList = [];
      if (localStorage.getItem('bookList') != null) {
        bookList = JSON.parse(localStorage.getItem('bookList'));
      }
      return bookList;
    }
  
    static addBook = (book) => {
      const bookList = BookList.getBooks();
      bookList.push(book);
      localStorage.setItem('bookList', JSON.stringify(bookList));
    }
  
    static removeBook = (index) => {
      let bookList = BookList.getBooks();
      bookList = bookList.filter((element) => element !== bookList[index]);
      renderElements(bookList, bookContainer);
      localStorage.setItem('bookList', JSON.stringify(bookList));
    };
  }
  
  