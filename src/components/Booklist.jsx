import React from 'react'
import books from '../data'
import Book from './Book'

const Booklist = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

export default Booklist
