// Interface representing a book review
interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

// Book class
class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

// Array to store reviews
const reviews: Review[] = [];

// Function to display book information
function displayBook(book: Book): void {
  const bookList: HTMLElement | null =
    document.getElementById("book-list");

  if (bookList) {
    const bookDiv: HTMLDivElement =
      document.createElement("div");

    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>By ${book.author}, ${book.year}</p>
    `;

    bookList.appendChild(bookDiv);
  }
}

// Function to add a review
function addReview(
  bookId: number,
  rating: number,
  comment: string
): void {
  const review: Review = {
    bookId: bookId,
    rating: rating,
    comment: comment
  };

  reviews.push(review);
}

// Create book objects
const book1: Book = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  1937
);

const book2: Book = new Book(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  1954
);

// Display books
displayBook(book1);
displayBook(book2);

// Add reviews
addReview(
  1,
  5,
  "An amazing adventure story with memorable characters."
);

addReview(
  2,
  5,
  "A fantastic fantasy novel with an incredible world."
);

// Display reviews in the console
console.log("Reviews:", reviews);