const addBookForm = document.querySelector('.add-book-form');
const bookContainer = document.querySelector('.books');
const bookForminputs = [...addBookForm.elements];
const mainSection = document.querySelector('.main-section');
const links = document.querySelectorAll('.link');
import renderElements from "./modules/renderelement";
import { Book, BookList } from "./modules/book";
import { DateTime } from "./modules/luxon";


const linkarr = [...links];
const sections = [...mainSection.children];
let title;
let author;


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


const bookList = BookList.getBooks();
renderElements(bookList, bookContainer);

bookContainer.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.btn-rm');
    console.log(removeBtn);
    BookList.removeBook(removeBtn.getAttribute('data-id'));
});

  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const book = new Book(title, author);
    BookList.addBook(book);
    addBookForm.submit();
  });

