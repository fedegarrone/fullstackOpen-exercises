import { ResetButton } from './ResetButton.jsx';
import { Square } from './Square.jsx'
  
export function WinnerModal({ winner, resetGame }) 
{
  if (winner === null) return null
    
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? "Empate" : "Ganó " + winner}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <ResetButton resetGame={resetGame}/>
        </footer>
      </div>
    </section>
  );
}