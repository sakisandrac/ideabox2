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

  const getNewQuote = () => {
    setClicks(prev => prev + 1);
  }
  
  const saveQuote = () => {

    const saved = savedQuotes.content.some(q => {
      return q._id === quote[0]._id
    })

    if (!saved) {
      setSavedQuotes(prev => {
        return {
          ...prev,
          content: [...prev.content, quote[0]]
        }
      })
    }
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
      <div className='btn-container'>
        <button className='quote-btn' onClick={getNewQuote}>New Quote</button>
        <button className='quote-btn' onClick={saveQuote}>Save Quote</button>
        <button className='quote-btn' onClick={showSavedQuotes}>{savedQuotes.showingQuotes ? "Hide" : "Show"} Saved Quotes</button>
      </div>
      {savedQuotes.showingQuotes && <SavedQuotes savedQuotes={savedQuotes} />}
    </div>
  )
}

export default Quotebox