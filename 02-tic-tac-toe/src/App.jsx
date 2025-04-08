import { useState } from 'react'
import Board from './components/Board'

export default function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  const handlePlay = () => {
    setHistory(...history, nextSquares);
    SetXIsNext(!xIsNext);
  }
  
  const moves = history.map((squares, move) => {
    let navigation = '';
    if(moves > 0){
      navigation = "Pindah ke langkah " + move;
    }else {
      navigation = "Klik Board untuk mulai Game";
    }
    
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{navigation}</button>
      </li>
    )
  });
  
  function jumpTo(){
    
  }
  
  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div>
        <ul>
          {moves}
        </ul>
      </div>
    </div>
  );
}