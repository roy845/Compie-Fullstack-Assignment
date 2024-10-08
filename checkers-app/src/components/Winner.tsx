import { PLAY_AGAIN, WINS } from "../constants/gameConstants";
import useWinner from "../hooks/useWinner";
import "../styles/Winner.css";

const Winner = (): JSX.Element | null => {
  const { winner, resetGame } = useWinner();

  if (!winner) return null;

  return (
    <div className="winner-overlay">
      <div className="winner-modal">
        <h2 className="winner-heading">
          {winner} {WINS}
        </h2>
        <button onClick={resetGame} className="play-again-button">
          {PLAY_AGAIN}
        </button>
      </div>
    </div>
  );
};

export default Winner;
