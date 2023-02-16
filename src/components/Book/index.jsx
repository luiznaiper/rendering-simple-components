import React from 'react'
import Author from './Author'
import Image from './Image'
import Title from './Title'

const Book = ({ id, img, title, author, getBook }) => {
  return (
    <article className="book">
      <Image img={img} title={title} />
      <Title title={title} />
      <Author author={author} />
      <button onClick={() => getBook(id)}>Click Me</button>
    </article>
  )
}

export default Book
