import { useAppSelector } from "../app/hooks";

const useCurrentPlayer = () => {
  const currentPlayer: string = useAppSelector(
    (state) => state.checkers.currentPlayer
  );
  return { currentPlayer };
};

export default useCurrentPlayer;
