import { useState } from "react";

function Square({value, onSquare}) {
 
  return (
    <>
      <button className="square" onClick={onSquare}>{value}</button>
    </>
  );
}

// Board

export default function Board() {
  const [isPlayer, setIsPlayer] = useState(true)
  const [squares, setSquares] =  useState(Array(9).fill(null))
  function handleClick(i) {
    if(squares[i]){
      return
    }
    console.log('clicked!');
    const nextSquare = squares.slice()
   if(isPlayer){
    nextSquare[i] = 'X'
   }else{
    nextSquare[i] = 'O'
   }
    setSquares(nextSquare)
    setIsPlayer(!isPlayer)
  }
  return (
    <>
     <div className="whole">
     <div className="board-row">
        <Square value={squares[0]} onSquare = {()=> handleClick(0)}/>
        <Square value={squares[1]} onSquare = {()=> handleClick(1)}/>
        <Square value={squares[2]} onSquare = {()=> handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquare = {()=> handleClick(3)} />
        <Square value={squares[4]} onSquare = {()=> handleClick(4)} />
        <Square value={squares[5]} onSquare = {()=> handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquare = {()=> handleClick(6)} />
        <Square value={squares[7]} onSquare = {()=> handleClick(7)} />
        <Square value={squares[8]} onSquare = {()=> handleClick(8)} />
      </div>
     </div>
    </>
  );
}

function findWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i=0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    return squares[a]
  }
  return (
    <>
    </>
  )
}
