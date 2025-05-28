export default function Card({ game }) {
  return (
    <div className="game-card">
      <h4>
        {game.name} - {game.inStock ? 'In Stock' : 'Out of Stock'}
      </h4>
      <button>Edit</button>
    </div>
  );
}
