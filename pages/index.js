import { client, booksQuery } from "../lib/sanity";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Contact } from "../components/Contact/Contact";
import { Card } from "../components/Card/Card";

export default function IndexPage({ books }) {
  return (
    <>
      <main>
        <Header />
        <Card books={books} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const books = await client.fetch(booksQuery);

  return {
    props: {
      books,
    },
    revalidate: 60,
  };
}
