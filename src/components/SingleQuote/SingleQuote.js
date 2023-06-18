import React from 'react'

const SingleQuote = ({quote}) => {
  return (
    <article className='quote-box'>
      <p className='quote-text'>{quote[0].content}</p>
    </article>
  )
}

export default SingleQuote