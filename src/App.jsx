import { useState } from 'react'
import './App.css'
import {words} from '/src/words'
import {languages} from '/src/languages'
import Header from '/src/components/Header'
import Deathinfo from '/src/components/Deathinfo'
import Word from '/src/components/Word'
import Keys from  '/src/components/Keys'
import NewGame from '/src/components/NewGame'
import Confetti from 'react-confetti'


function App() {
  const [guessed,setGuessed] = useState([])
  const [word,setWord] = useState(() => words[Math.floor(Math.random()*words.length)])
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  let incorrect = 0
  let correct = 0
  guessed.forEach((g)=>{
    if(!word.toUpperCase().includes(g)) incorrect++
    else correct++
  })

  let unique = new Set(word).size

  const heroes = languages.map((lang,idx) =>{
    return <button key={idx} style={{backgroundColor : lang.backgroundColor, color : lang.color, opacity : idx < incorrect? 0.33 : 1, textDecoration : idx < incorrect && 'line-through'}} className='px-4 py-2 rounded-md'>{lang.name}</button>
  })

  console.log(word)

  function togglekey(letter){
    if(!guessed.includes(letter)) setGuessed(prev => [...prev,letter])
  }

  function newGame(){
    setGuessed([])
    setWord(words[Math.floor(Math.random()*words.length)])
  }

  return (
    <>
      <Header />
      <Deathinfo 
        guessed={guessed}
        word={word}
        languages={languages}
        incorrect={incorrect}
        correct={correct}
        />
      <div className='flex justify-center items-center flex-wrap w-122 gap-x-2 gap-y-2 ml-auto mr-auto'>
        {heroes}
      </div>
      <Word 
        word={word}
        guessed={guessed}
        incorrect={incorrect}
      />
      <Keys
        togglekey = {togglekey}
        guessed = {guessed}
        word = {word}
        incorrect={incorrect}
      />
      {(incorrect === 8 || correct===unique) && <NewGame newGame={newGame}/>}
      {correct===unique && <Confetti width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={1000}
          origin={{
            x: Math.random(), 
            y: 0.8,          
          }}
          style={{ position: 'fixed', top: 0, left: 0 }}/>}
    </>
  )
}

export default App
