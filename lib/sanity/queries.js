export const booksQuery = `*[_type == "book"] | order(_createdAt desc) {
  _id,
  name,
  author,
  image,
  description
}`;
