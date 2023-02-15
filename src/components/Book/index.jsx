import React from 'react'
import Author from './Author'
import Image from './Image'
import Title from './Title'

const Book = ({ book: { img, title, author } }) => {
  return (
    <article className="book">
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
    </article>
  )
}

export default Book
