import { useState } from 'react';
import './App.css';
import Quotebox from './components/Quotebox/Quotebox';

const App = () => {

  const [quote, setQuote] = useState([{content: '... loading quote'}]);

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <Quotebox quote={quote} setQuote={setQuote}/>
    </div>
  );
}

export default App;
