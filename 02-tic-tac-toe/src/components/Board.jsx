import { useState } from 'react'
import Square from './Square.jsx';

function Board(xIsNext, squares, onPlay) {
  
  const onSquareClick = (i) => {
    // Cek apakah nilai pada kolom berisi
    // if biasa
    // if(squares[i]){
    //   return;
    // }
    // atau bisa gunakan seperti Infini
    if(squares[i] || getWinner(squares)) return;
    const nextSquares = squares.slice();
    // Operator Biasa
    // if (xIsNext){
    //   nextSquares[i] = 'X';
    // } else {
    //   nextSquares[i] = 'O';
    // }
    
    // Operator Ternary
    nextSquares[i] = (xIsNext) ? 'X' : 'O';
    onPlay(nextSquares);
  }
  
  const winner = getWinner(squares);
  let status = (xIsNext) ? "Player X" : "Player O";
  if (winner){
    status = "Winner " + winner + " 🥳";
  }

  return (
    <div className="container" >
      <span className="status" >{status}</span>
      <div className="wraper" >
        <Square value={squares[0]} handleClick={() => onSquareClick(0)}/>
        <Square value={squares[1]} handleClick={() => onSquareClick(1)}/>
        <Square value={squares[2]} handleClick={() => onSquareClick(2)}/>
      </div>
      <div className="wraper" >
        <Square value={squares[3]} handleClick={() => onSquareClick(3)}/>
        <Square value={squares[4]} handleClick={() => onSquareClick(4)}/>
        <Square value={squares[5]} handleClick={() => onSquareClick(5)}/>
      </div>
      <div className="wraper" >
        <Square value={squares[6]} handleClick={() => onSquareClick(6)}/>
        <Square value={squares[7]} handleClick={() => onSquareClick(7)}/>
        <Square value={squares[8]} handleClick={() => onSquareClick(8)}/>
      </div>
    </div>
  )
}

export default Board;

function getWinner(squares){
    const rules = [
      //Menang secara Horizontal
      [0,1,2],
      [3,4,5],
      [6,7,8],
      // Menang secara Vertikal
      [0,3,6],
      [1,4,7],
      [2,5,8],
      // Menang secara Diagonal \
      [0,4,8],
      // Menang secara diagonal /
      [2,4,6]
    ];
    
    for (let i = 0; i < rules.length; i++) {
      //Js lama
      // const a = rules[i][0];
      // const b = rules[i][1];
      // const c = rules[i][2];
      // Js baru menggunakan destructuring
      const [a, b, c] = rules[i];
      
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return false;
}
