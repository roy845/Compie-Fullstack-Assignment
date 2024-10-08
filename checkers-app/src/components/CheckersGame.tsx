import Winner from "./Winner";
import GameHeader from "./GameHeader";
import CurrentPlayer from "./CurrentPlayer";
import PlayerInfo from "./PlayerInfo";
import PlayerConnectionStatus from "./PlayerConnectionStatus";
import RowLabels from "./RowLabels";
import ColumnLabels from "./ColumnLabels";
import { GameBoard } from "./GameBoard";
import ResetButton from "./ResetButton";
import "../styles/CheckersGame.css";
import { GAME_HEADER } from "../constants/gameTitle";

const CheckersGame = (): JSX.Element => {
  return (
    <div className="checkers-game-container">
      <GameHeader title={GAME_HEADER} />

      <CurrentPlayer />

      <PlayerInfo />

      <PlayerConnectionStatus />

      <div className="board-container">
        <RowLabels />

        <GameBoard />
      </div>

      <ColumnLabels />

      <ResetButton />

      <Winner />
    </div>
  );
};

export default CheckersGame;
