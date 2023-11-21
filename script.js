// Store your books in an array
const myLibrary = [];

// Function to add a book to the library
function addBookToLibrary(author, title, pages, status) {
  const newBook = {
    author: author,
    title: title,
    pages: pages,
    status: status,
  };

  myLibrary.push(newBook);
  displayBooks(); // Update the displayed library
}

// Function to display books
function displayBooks() {
  const libraryContainer = document.getElementById("library");
  libraryContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.status}</p>
      <button onclick="removeBook(${index})">Remove</button>
    `;

    libraryContainer.appendChild(bookCard);
  });
}

// Function to handle form submission
document.querySelector(".add-book").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  const author = document.querySelector(".author-input").value;
  const title = document.querySelector(".title-input").value;
  const pages = document.querySelector(".pages-input").value;
  const status = document.querySelector(".status-input").value;

  addBookToLibrary(author, title, pages, status); // Add the book to the library
});
