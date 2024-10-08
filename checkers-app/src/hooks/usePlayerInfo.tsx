import { useSocket } from "./useSocket";

const usePlayerInfo = () => {
  const { player } = useSocket();

  return { player };
};

export default usePlayerInfo;
