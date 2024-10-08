import { useState } from "react";
import { useSocket } from "./useSocket";
import { RESET_GAME } from "../constants/socketConstants";

const useResetButton = () => {
  const { socket } = useSocket();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleResetClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmReset = () => {
    socket.emit(RESET_GAME);
    setIsModalOpen(false);
  };

  const handleCancelReset = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleResetClick,
    handleConfirmReset,
    handleCancelReset,
  };
};

export default useResetButton;
