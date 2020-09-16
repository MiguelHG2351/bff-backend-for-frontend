import BooksServices from "./services/BooksServices";
import { format } from 'timeago.js'

const bookServies = new BooksServices();

class UI {
  async renderBook() {
    const books = await bookServies.getBooks();
    console.log(books);
    const bookContainer = document.getElementById("container-card");
    bookContainer.innerHTML = "";
    books.forEach((data) => {
      const div = document.createElement("div");
      div.classList.add('card')
      div.innerHTML = `
            <div class="card-image">
                <img src="/${data.imagePath}" alt="">
            </div>
            <div class="description-card">
                <h4>${data.title}</h4>
                <p>${data.author}</p>
                <a class="btn btn-delete" _id="${data._id}">Delete</a>
            </div>
            <div className="footer-card">
                <p>${format(data.created_at)}</p>
            </div>
        `;
        bookContainer.appendChild(div)
    });
  }

  async addNewBook(book) {
    await bookServies.postBooks(book);
    this.renderBook()
    this.clearBookForm();
  }

  clearBookForm() {
    document.getElementById("form").reset();
  }

  renderMessage() {}

  async deleteBook(bookId) {
    await bookServies.deleteBook(bookId);
    this.renderBook();
  }
}

export default UI;
