import { PLAYER1, PLAYER2, Players } from "../constants/players";
import usePlayerInfo from "../hooks/usePlayerInfo";
import "../styles/PlayerInfo.css";

const PlayerInfo = (): JSX.Element => {
  const { player } = usePlayerInfo();
  return (
    <p
      className={`player-info ${
        player === "player1" ? "player1-color" : "player2-color"
      }`}
    >
      You are: <strong>{player === Players.PLAYER1 ? PLAYER1 : PLAYER2}</strong>
    </p>
  );
};

export default PlayerInfo;
