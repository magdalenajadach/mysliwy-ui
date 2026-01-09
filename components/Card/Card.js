import { urlFor } from "../../lib/sanity";

export function Card({ books }) {
  if (!books || books.length === 0) {
    return null;
  }

  return (
    <div className="">
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book._id}>
          <h3>{book.name}</h3>
          {book.author && <p>{book.author}</p>}
          {book.description && <p>{book.description}</p>}
          {book.image && (
            <img alt={book.name} src={urlFor(book.image).width(400).url()} />
          )}
        </div>
      ))}
    </div>
  );
}
