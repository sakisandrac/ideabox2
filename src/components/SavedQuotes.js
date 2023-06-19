import React from 'react'

const SavedQuotes = ({savedQuotes}) => {
  console.log(savedQuotes)
  const quotes = savedQuotes.content.map(item => {
    return <p className="quote-text" key={item._id}>{item.content}</p>
  })

  return (
    <div className='saved-quotes-wrapper'>
      <h1 className="saved-quotes-heading">Saved Quotes</h1>
      <section className="saved-quotes-container">
        {quotes}
      </section>
      
    </div>
  )
}

export default SavedQuotes