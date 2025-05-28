import './style.css';
import Card from './Card';
export default function Games() {
  const games = [
    { id: 1, name: 'Mario', inStock: true },
    { id: 2, name: 'Crash Bandicoot', inStock: true },
    { id: 3, name: 'Mega Man', inStock: false },
    { id: 4, name: 'Pokemon', inStock: true },
    { id: 5, name: 'Sonic', inStock: false },
    { id: 6, name: 'Rayman', inStock: true },
    { id: 7, name: 'Donkey Kong', inStock: true },
  ];

  return (
    <div className="games-container">
      <h2>Games</h2>
      <div className="game-cards">
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
