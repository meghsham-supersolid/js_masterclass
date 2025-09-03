const numberArray = [22, 42, 98, 74, 62, 46, 82, 49, 87, 64, 85];

const onlyOddNumber = numberArray.filter(function (number) {
  return number % 2 != 0;
});

console.log(`Filtered odd numbers ${onlyOddNumber} from ${numberArray}`);

const onlyEvenNumber = numberArray.filter((number) => number % 2 == 0);

console.log(`\n\n\nFiltered even numbers ${onlyEvenNumber} from ${numberArray}`);

const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    publishedYear: 1979,
    price: 12.5,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    publishedYear: 1960,
    price: 10.99,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publishedYear: 1954,
    price: 24.75,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    publishedYear: 1965,
    price: 15.0,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 1813,
    price: 8.99,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    publishedYear: 1925,
    price: 11.25,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    publishedYear: 1949,
    price: 9.5,
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    publishedYear: 1851,
    price: 14.75,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age Fiction",
    publishedYear: 1951,
    price: 9.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    publishedYear: 1997,
    price: 18.25,
  },
];

const booksAfter1960 = books.filter((book) => book.publishedYear > 1960);

console.log(`\n\n\nBooks published after  1960 are `);

booksAfter1960.forEach((book) => console.log(book));


const fantasyBooks = books.filter((book) => book.genre === "Fantasy");

console.log(`\n\n\nFantasy Books :`);
 fantasyBooks.forEach((book) => console.log(book));
