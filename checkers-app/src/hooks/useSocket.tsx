import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { USE_SOCKET_ERROR } from "../constants/socketConstants";

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(USE_SOCKET_ERROR);
  }
  return context;
};
