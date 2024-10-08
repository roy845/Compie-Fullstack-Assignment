import { useAppSelector } from "../app/hooks";
import { useSocket } from "./useSocket";

const useWinner = () => {
  const winner: string | null = useAppSelector(
    (state) => state.checkers.winner
  );

  const { resetGame } = useSocket();

  return {
    winner,
    resetGame,
  };
};

export default useWinner;
