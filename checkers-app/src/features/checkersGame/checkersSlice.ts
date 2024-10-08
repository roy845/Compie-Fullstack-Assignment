import { createSlice } from "@reduxjs/toolkit";
import { GameState } from "../../types/gameTypes";
import { Players } from "../../constants/players";
import { CHECKERS_SLICE_NAME } from "./sliceConstants";

const initialState: GameState = {
  board: new Array<string | null>(8)
    .fill(null)
    .map(() => Array<string | null>(8).fill(null)),
  currentPlayer: Players.PLAYER1,
  selectedChecker: null,
  winner: null,
};

const checkersSlice = createSlice({
  name: CHECKERS_SLICE_NAME,
  initialState,
  reducers: {
    setGameState(state, action) {
      const { board, currentPlayer, winner } = action.payload;
      state.board = board;
      state.currentPlayer = currentPlayer;
      state.winner = winner;
      state.selectedChecker = null;
    },

    selectChecker(state, action) {
      const { row, col } = action.payload;
      if (
        state.selectedChecker &&
        state.selectedChecker.row === row &&
        state.selectedChecker.col === col
      ) {
        state.selectedChecker = null;
      } else if (state.board[row][col] === state.currentPlayer) {
        state.selectedChecker = { row, col };
      }
    },
  },
});

export const { selectChecker, setGameState } = checkersSlice.actions;

export default checkersSlice.reducer;
