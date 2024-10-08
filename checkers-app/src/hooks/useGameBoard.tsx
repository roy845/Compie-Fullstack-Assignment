import { BoardType } from "../types/boardTypes";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { SelectedChecker } from "../types/gameTypes";
import { useSocket } from "./useSocket";
import { selectChecker } from "../features/checkersGame/checkersSlice";
import { Players } from "../constants/players";
import { MOVE } from "../constants/socketConstants";

const useGameBoard = () => {
  const board: BoardType = useAppSelector((state) => state.checkers.board);

  const { player, socket } = useSocket();

  const selectedChecker: SelectedChecker = useAppSelector(
    (state) => state.checkers.selectedChecker
  );
  const winner: string | null = useAppSelector(
    (state) => state.checkers.winner
  );
  const currentPlayer: string = useAppSelector(
    (state) => state.checkers.currentPlayer
  );

  const dispatch = useAppDispatch();

  const isTealSquare: (row: number, col: number) => boolean = (
    row: number,
    col: number
  ) => (row + col) % 2 === 1;

  const handleSquareClick = (row: number, col: number): void => {
    if (winner) return;

    if (
      player !==
      (currentPlayer === Players.PLAYER1 ? Players.PLAYER1 : Players.PLAYER2)
    ) {
      return;
    }

    if (selectedChecker) {
      if (board[row][col] === player) {
        dispatch(selectChecker({ row, col }));
      } else {
        const moveData = { from: selectedChecker, toRow: row, toCol: col };
        socket.emit(MOVE, moveData);
      }
    } else if (board[row][col] === player) {
      dispatch(selectChecker({ row, col }));
    }
  };

  return {
    board,
    selectedChecker,
    isTealSquare,
    handleSquareClick,
  };
};

export default useGameBoard;
