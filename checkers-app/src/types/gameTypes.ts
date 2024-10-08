import { BoardType } from "./boardTypes";

export type GameState = {
  board: BoardType;
  currentPlayer: string;
  selectedChecker: SelectedChecker;
  winner: string | null;
};

export type SelectedChecker = { row: number; col: number } | null;
