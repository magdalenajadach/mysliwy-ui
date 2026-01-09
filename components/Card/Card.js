import { books } from "../../config/books";

export function Card({ }) {
  return (
    <div className="">
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book.title}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
					<img alt="Book title" src={book.image} />
        </div>
      ))}
    </div>
  );
}
