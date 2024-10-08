import {
  OTHER_PLAYER_IS_CONNECTED,
  WAITING_TO_OTHER_PLAYER,
} from "../constants/gameConstants";
import usePlayerConnectionStatus from "../hooks/usePlayerConnectionStatus";

const PlayerConnectionStatus = (): JSX.Element => {
  const { otherPlayerConnected } = usePlayerConnectionStatus();
  return (
    <p>
      {otherPlayerConnected
        ? OTHER_PLAYER_IS_CONNECTED
        : WAITING_TO_OTHER_PLAYER}
    </p>
  );
};

export default PlayerConnectionStatus;
