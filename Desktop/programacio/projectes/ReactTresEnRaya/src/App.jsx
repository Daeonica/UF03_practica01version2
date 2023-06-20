import { useState } from 'react'
import './App.css'

const TURNS = { // turnos
  X: '❌',
  O: '⚪'
}



//cuadrados del board
const Square = ({ children, isSelected, updateBoard, index }) => {

  //si isSelected es true entonces le añadimos is-selected como estilo
  const className = `square ${isSelected ? 'is-selected' : ''}`


  const handleClick = () => {
    updateBoard(index)
  }
  // cuando el usuario clicka en uno de los divs, se hace updateBoeard
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  //el tablero es un array
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(() => { TURNS.X })

  const updateBoard = () => {

  }

  return (
    <main className='board'>
      <h1>Tres en raya</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>

        <Square isSelected={turn === TURNS.O} >{TURNS.O}</Square>
      </section>
    </main>
  )
}

export default App
