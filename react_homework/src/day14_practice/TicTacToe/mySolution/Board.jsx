import Square from './Square';

export default function Board({ squares, onSquareClick }) {
  const renderSquare = (i) => {
    return (
      <Square
        // className="row"
        key={i}
        value={squares[i]}
        onClick={() => onSquareClick(i)}
      />
    );
  };
  return (
    <div className="board">
      {[0, 3, 6].map((row) => (
        <div key={row}>
          {renderSquare(row)}
          {renderSquare(row + 1)}
          {renderSquare(row + 2)}
        </div>
      ))}
    </div>
  );
}
