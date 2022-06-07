import renderElements from './modules/renderElements.js';
import { Book, BookList } from './modules/book.js';
import { DateTime } from './modules/luxon.js';

const addBookForm = document.querySelector('.add-book-form');
const bookContainer = document.querySelector('.books');
const bookForminputs = [...addBookForm.elements];
const mainSection = document.querySelector('.main-section');
const links = document.querySelector('.navbar');
const linkarr = [...links.children];
const sections = [...mainSection.children];
let title;
let author;

const now = DateTime.now().toLocaleString({
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
});
const dateContainer = document.createElement('div');
dateContainer.innerHTML += now;
links.insertAdjacentElement('afterend', dateContainer);

linkarr.forEach((element, index) => {
  const index1 = index;
  element.addEventListener('click', () => {
    sections.forEach((element, index) => {
      if (index1 === index) {
        element.classList.remove('not-visible');
      } else {
        element.classList.add('not-visible');
      }
    });
  });
});

bookForminputs.forEach((element) => {
  if (element.name === 'title') {
    element.addEventListener('change', (e) => {
      title = e.target.value;
    });
  }
  if (element.name === 'author') {
    element.addEventListener('change', (e) => {
      author = e.target.value;
    });
  }
});

let bookList = BookList.getBooks();
renderElements(bookList, bookContainer);

bookContainer.addEventListener('click', (e) => {
  const removeBtn = e.target.closest('.btn-rm');
  bookList = BookList.getBooks();
  BookList.removeBook(removeBtn.getAttribute('data-id'), bookList, bookContainer);
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book(title, author);
  bookList = BookList.getBooks();
  BookList.addBook(book, bookList);
  addBookForm.submit();
});
