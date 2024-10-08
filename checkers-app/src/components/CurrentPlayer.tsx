import { PLAYER1, PLAYER2, Players } from "../constants/players";
import useCurrentPlayer from "../hooks/useCurrentPlayer";
import "../styles/CurrentPlayer.css";

const CurrentPlayer = (): JSX.Element => {
  const { currentPlayer } = useCurrentPlayer();

  return (
    <h2
      className={`current-player-heading ${
        currentPlayer === Players.PLAYER1 ? "player1-color" : "player2-color"
      }`}
    >
      Current Player: {currentPlayer === Players.PLAYER1 ? PLAYER1 : PLAYER2}
    </h2>
  );
};

export default CurrentPlayer;
