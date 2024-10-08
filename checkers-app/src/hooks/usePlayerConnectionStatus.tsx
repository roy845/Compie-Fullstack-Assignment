import { useSocket } from "./useSocket";

const usePlayerConnectionStatus = () => {
  const { otherPlayerConnected } = useSocket();

  return { otherPlayerConnected };
};

export default usePlayerConnectionStatus;
