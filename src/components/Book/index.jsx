import React from 'react'
import Author from './Author'
import Image from './Image'
import Number from './Number'
import Title from './Title'

const Book = ({ img, title, author, number }) => {
  return (
    <article className="book">
      <Number number={number} />
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
    </article>
  )
}

export default Book
