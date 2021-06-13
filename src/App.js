import './App.css';
import React, {useState, useEffect, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './components/List'
import Form from './components/Form'

function App() {
  //states
  const [cards, setCards] = useState([])
  const [cates, setCates] = useState([])

  //effects to load the category
  useEffect(async() =>{
    const response = await fetch('https://opentdb.com/api_category.php')
    const data = await response.json()
    
    setCates(data.trivia_categories)
    console.log(cates)
    }, [])

  return (
    <div className="App">
      <h1 className="display-3 text-center mt-3">Trivia time!!!</h1>
      <div className="container w-100 mt-4 mb-5">
        <Form cates={cates} setCates={setCates} cards={cards} setCards={setCards}/>
        {/* the cards from useState above is passed here as props */}
        <List cards={cards}/>
      </div>
    </div>
  );
}


export default App;
