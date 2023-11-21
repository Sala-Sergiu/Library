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

// Function to remove a book from the library
function removeBook(index) {
  const isConfirmed = confirm("Are you sure you want to remove this book?");
  if (isConfirmed) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
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
  const notReadRadio = document.getElementById("not-read");
  const readRadio = document.getElementById("read");
  let status = "";

  if (notReadRadio.checked) {
    status = "Not Read";
  } else if (readRadio.checked) {
    status = "Read";
  }

  if (author.trim() !== "" && title.trim() !== "") {
    addBookToLibrary(author, title, pages, status); // Add the book to the library

    // Clear input fields after successful submission
    document.querySelector(".author-input").value = "";
    document.querySelector(".title-input").value = "";
    document.querySelector(".pages-input").value = "";
    notReadRadio.checked = true; // Set "Not Read" as default after submission
    readRadio.checked = false;

    displayBooks(); // Update displayed books
  } else {
    alert("Please fill in both Author and Title fields.");
  }
});
