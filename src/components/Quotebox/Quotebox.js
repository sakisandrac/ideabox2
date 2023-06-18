import React, { useEffect, useState } from 'react'
import SingleQuote from '../SingleQuote/SingleQuote';
import SavedQuotes from '../SavedQuotes';

const Quotebox = ({quote, setQuote}) => {

  const [savedQuotes, setSavedQuotes] = useState({
    showingQuotes: false,
    content: []
  });

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    fetch('https://api.quotable.io/quotes/random')
    .then(res => res.json())
    .then(data => {
      setQuote(data)
    })
    .catch(err => console.log(err))
  }, [clicks])

  useEffect(() => {
    // console.log(savedQuotes)
  }, [savedQuotes])

  const getNewQuote = () => {
    setClicks(prev => prev + 1);
  }
  
  const saveQuote = () => {
    console.log(quote.id)
    console.log(savedQuotes)
    const saved = savedQuotes.content.some(q => {
      return q.id === quote.id
    })
    console.log(saved)
    setSavedQuotes(prev => {
      return {
        ...prev,
        content: [...prev.content, quote[0]]
      }
    })
  }

  const showSavedQuotes = () => {
    setSavedQuotes(prev => {
      return {
        ...prev,
        showingQuotes: !prev.showingQuotes,
      }
    })
  }

  return (
    <div className='quote-container'>
      <SingleQuote quote={quote}/>
      <button className='quote-btn' onClick={getNewQuote}>New Quote</button>
      <button className='quote-btn' onClick={saveQuote}>Save Quote</button>
      <button onClick={showSavedQuotes}>{savedQuotes.showingQuotes ? "Hide" : "Show" } Saved Quotes</button>
      {savedQuotes.showingQuotes && <SavedQuotes savedQuotes={savedQuotes}/>}
    </div>
  )
}

export default Quotebox