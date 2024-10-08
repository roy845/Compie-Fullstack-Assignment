import React, { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAppDispatch } from "../app/hooks";
import { setGameState } from "../features/checkersGame/checkersSlice";
import { GAME_IS_FULL, HAS_JOINED_THE_GAME } from "../constants/gameConstants";
import {
  GAME_FULL,
  INIT_BOARD,
  MOVE_MADE,
  NEW_PLAYER,
  PLAYER_ASSIGNED,
  PLAYER_DISCONNECTED,
  RESET_BOARD,
  RESET_GAME,
  SOCKET_ERROR,
} from "../constants/socketConstants";
import { BASE_URL } from "../constants/serverAPIConstants";

let socket: Socket = io(BASE_URL);

type SocketContextType = {
  player: string | null;
  otherPlayerConnected: boolean;
  resetGame: () => void;
  socket: Socket;
};

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const [player, setPlayer] = useState<string | null>(null);
  const [otherPlayerConnected, setOtherPlayerConnected] =
    useState<boolean>(false);

  useEffect(() => {
    socket.on(PLAYER_ASSIGNED, (assignedPlayer) => {
      setPlayer(assignedPlayer);
      console.log("You are: ", assignedPlayer);
    });

    socket.on(INIT_BOARD, (gameState) => {
      dispatch(setGameState(gameState));
    });

    socket.on(NEW_PLAYER, ({ player }) => {
      setOtherPlayerConnected(true);
      console.log(`${player} ${HAS_JOINED_THE_GAME}`);
    });

    socket.on(RESET_BOARD, (gameState) => {
      dispatch(setGameState(gameState));
    });

    socket.on(MOVE_MADE, (gameState) => {
      dispatch(setGameState(gameState));
    });

    socket.on(PLAYER_DISCONNECTED, () => {
      setOtherPlayerConnected(false);
    });

    socket.on(GAME_FULL, () => {
      alert(GAME_IS_FULL);
    });

    socket.on(SOCKET_ERROR, (message) => {
      alert(message);
    });

    return () => {
      socket.off(PLAYER_ASSIGNED);
      socket.off(NEW_PLAYER);
      socket.off(RESET_BOARD);
      socket.off(MOVE_MADE);
      socket.off(INIT_BOARD);
      socket.off(PLAYER_DISCONNECTED);
      socket.off(GAME_FULL);
      socket.off(SOCKET_ERROR);
    };
  }, [dispatch]);

  const resetGame = () => {
    socket.emit(RESET_GAME);
  };

  return (
    <SocketContext.Provider
      value={{ player, otherPlayerConnected, resetGame, socket }}
    >
      {children}
    </SocketContext.Provider>
  );
};
