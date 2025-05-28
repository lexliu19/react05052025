import { useState } from 'react';
import Board from './Board';
import './tictactoe.css';
import calculateWinner from './calculateWinner';
export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner:${winner}`
    : squares.every(Boolean)
    ? 'Draw'
    : `Next Player: ${isXNext ? 'X' : 'O'}`;

  // let status;

  // if (winner) {
  //   status = `Winner: ${winner}`;
  // } else if (squares.every(Boolean)) {
  //   //squares.every((square) => square !== null)
  //   status = 'Draw!';
  // } else {
  //   status = `Next player: ${isXNext ? 'X' : 'O'}`;
  // }

  const handleSquareClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = [...squares]; //copy the org squares
    nextSquares[i] = isXNext ? 'X' : 'O'; //set i th square to X/O
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h2>Tic-Tac-Toe</h2>
      <div className="status">{status}</div>
      <Board squares={squares} onSquareClick={handleSquareClick} />
      <button onClick={handleReset}>Restart</button>
    </div>
  );
}
