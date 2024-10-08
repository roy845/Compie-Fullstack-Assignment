import { Players } from "../constants/players";
import useGameBoard from "../hooks/useGameBoard";
import "../styles/GameBoard.css";

export const GameBoard = (): JSX.Element => {
  const { board, selectedChecker, handleSquareClick, isTealSquare } =
    useGameBoard();

  return (
    <div className="game-board">
      {board.map((row: (string | null)[], rowIndex: number) =>
        row.map((piece, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`square ${
              isTealSquare(rowIndex, colIndex) ? "teal-square" : "gray-square"
            }`}
            onClick={() => handleSquareClick(rowIndex, colIndex)}
          >
            {piece && (
              <div
                className={`checker ${
                  piece === Players.PLAYER1
                    ? "player1-checker"
                    : "player2-checker"
                } ${
                  selectedChecker &&
                  selectedChecker.row === rowIndex &&
                  selectedChecker.col === colIndex
                    ? "selected-checker"
                    : ""
                }`}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};
