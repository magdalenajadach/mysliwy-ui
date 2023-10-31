import { createClient } from "next-sanity";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Contact } from "../components/Contact/Contact";



export default function IndexPage({ books }) {
  return (
    <>
      <main>
        <Header />
        {/* {books.length > 0 && (
          <section>
            <h2>Books</h2>
            <div className="books__wrapper">
              {books.map((book) => (
                <div className="book">
                  <p className="book__title" key={book._id}>
                    {book?.name}
                  </p>
                  <p className="book__author" key={book._id}>
                    {book?.author}
                  </p>
                  <img alt="book cover" src={book.image} key={book._id} />
                </div>
              ))}
            </div>
          </section>
        )}
        {!books.length > 0 && <p>No books to show</p>} */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

const client = createClient({
  projectId: "kzn8exmp",
  dataset: "production",
  apiVersion: "2023-09-14",
  useCdn: false,
});
export async function getStaticProps() {
  const books = await client.fetch(`*[_type == "book"]`);

  return {
    props: {
      books,
    },
  };
}
