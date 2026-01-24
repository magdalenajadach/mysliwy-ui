import { useState } from "react";
import { urlFor } from "../../lib/sanity";

export function Card({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  if (!books || books.length === 0) {
    return null;
  }

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <section className="books" id="biblioteka">
      <div className="books__grid">
        {books.map((book) => (
          <div
            key={book._id}
            className="book-card"
            onClick={() => openModal(book)}
          >
            {book.image ? (
              <img
                className="book-card__image"
                alt={book.name}
                src={urlFor(book.image).width(400).url()}
              />
            ) : (
              <div className="book-card__placeholder" />
            )}
            <div className="book-card__content">
              <h3 className="book-card__title">{book.name}</h3>
              {book.author && (
                <p className="book-card__author">{book.author}</p>
              )}
              {book.publisher && (
                <p className="book-card__publisher">wydawnictwo: {book.publisher}</p>
              )}
              {book.yearOfIssue && (
                <p className="book-card__year">rok: {book.yearOfIssue}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedBook && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            {selectedBook.image ? (
              <img
                className="modal__image"
                alt={selectedBook.name}
                src={urlFor(selectedBook.image).width(400).url()}
              />
            ) : (
              <div className="modal__placeholder" />
            )}
            <div className="modal__details">
              <h2 className="modal__title">{selectedBook.name}</h2>
              {selectedBook.author && (
                <p className="modal__author">{selectedBook.author}</p>
              )}
              {selectedBook.publisher && (
                <p className="modal__publisher">Wydawnictwo: {selectedBook.publisher}</p>
              )}
              {selectedBook.yearOfIssue && (
                <p className="modal__year">Rok: {selectedBook.yearOfIssue}</p>
              )}
              {selectedBook.description && (
                <p className="modal__description">{selectedBook.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
