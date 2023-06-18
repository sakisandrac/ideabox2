import React from 'react'

const SavedQuotes = ({savedQuotes}) => {
  console.log(savedQuotes)
  const quotes = savedQuotes.content.map(item => {
    return <p key={item._id}>{item.content}</p>
  })

  return (
    <>
      <h1>SavedQuotes</h1>
      <section className="saved-quotes-container"></section>
      {quotes}
    </>
  )
}

export default SavedQuotes