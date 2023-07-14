import { useState } from 'react'
import './App.css'
import { Square } from './Square'

export function App() {
  
  const [square, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [winState, setWinState] = useState(null)
  var status = ""
  if(winState){
    status = "Winer " + winState
  }else{
    status = "Next player " + (xIsNext ? "X" : "O")
  }
  
  function handleClick(i) {
    const nextSquares = square.slice();
    if (winState){
      return
    }

    if(nextSquares[i]){
      return
    }
    if (xIsNext) {
      nextSquares[i]="X"
    }
    else{
      nextSquares[i]="O"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
    checkWin(nextSquares)
  }
  
  function checkWin(nextSquares){
    var j
    for (j=0; j <= 6; j+=3) {
      if (nextSquares[j]==nextSquares[j+1] && nextSquares[j]==nextSquares[j+2] && nextSquares[j]!=null){
        setWinState(nextSquares[j])
        return nextSquares[j]
      }
    }
    for (j=0; j <= 2; j++) {
      if (nextSquares[j]==nextSquares[j+3] && nextSquares[j]==nextSquares[j+6] && nextSquares[j]!=null){
        setWinState(nextSquares[j])
        return nextSquares[j]
      }
    }
    if(((nextSquares[0]==nextSquares[4] && nextSquares[0]==nextSquares[8])|| 
       (nextSquares[2]==nextSquares[4] && nextSquares[2]==nextSquares[6])) && nextSquares[4]!=null){
        setWinState(nextSquares[4])
        return nextSquares[4]
       }
  }

  function restart (){
    const nextSquares = square.slice();
    for (let i = 0; i < square.length; i++) {
      nextSquares[i]= null
      setSquares(nextSquares)
      setWinState(null)
      setXIsNext(true)
    }
  }
  
  return (
    <>
    <div className='status'>{status}</div>
    <div className='board'>
      <div className="row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)}>1</Square>
        <Square value={square[1]} onSquareClick={() => handleClick(1)}>2</Square>
        <Square value={square[2]} onSquareClick={() => handleClick(2)}>3</Square>
      </div>
      <div className="row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)}>4</Square>
        <Square value={square[4]} onSquareClick={() => handleClick(4)}>5</Square>
        <Square value={square[5]} onSquareClick={() => handleClick(5)}>6</Square>
      </div>
      <div className="row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)}>7</Square>
        <Square value={square[7]} onSquareClick={() => handleClick(7)}>8</Square>
        <Square value={square[8]} onSquareClick={() => handleClick(8)}>9</Square>
      </div>
    </div>
    <button onClick={restart}>Restart</button>
    </>
  )
}


