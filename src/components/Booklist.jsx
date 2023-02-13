import React from 'react'
import Book from './Book'

const firstBook = {
  author: 'Alice Schertle',
  title: "Little Blue Truck's Valentine: A Valentine's Day Book For Kids",
  img: 'https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/817-Vrzp+tL._AC_UL900_SR900,600_.jpg',
}

const secondBook = {
  author: 'James Clear',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg',
}

const Booklist = () => {
  return (
    <section className="book-list">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  )
}

export default Booklist
