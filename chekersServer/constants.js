const CORS_URL = "http://localhost:3000";
const METHOD_GET = "GET";
const METHOD_POST = "POST";
const PLAYER1 = "player1";
const PLAYER2 = "player2";
const SERVER_HEALTH = "Checkers Game Server is running.";
const SERVER_PROMPT = "Server is running on port 4000";
const USER_CONNECTED_PROMPT = "A user connected: ";
const USER_DISCONNECT_PROMPT = "User disconnected:";
const ERROR = "error";
const ERROR_INIT_GAME = "Error initializing game:";
const FAILED_INIT_GAME = "Failed to initialize the game.";
const ERROR_RESETTING_GAME = "Error resetting game:";
const FALED_RESETTING_GAME = "Failed to reset the game.";
const ERROR_MOVING_CHECKER_OR_CHECK_WINNER =
  "Error moving checker or checking winner:";
const INVALID_MOVE = "Invalid move or error processing the move.";

const ROOT_PATH = "/";

const BASE_URL = "http://localhost:5186/";

const PLAYER_ASSIGNED = "playerAssigned";
const INIT_BOARD = "initBoard";
const NEW_PLAYER = "newPlayer";
const RESET_BOARD = "resetBoard";
const MOVE_MADE = "moveMade";
const PLAYER_DISCONNECTED = "playerDisconnected";
const GAME_FULL = "gameFull";
const SOCKET_ERROR = "error";
const RESET_GAME = "resetGame";
const DISCONNECT = "disconnect";
const CONNECTION = "connection";
const MOVE = "move";

const API_URLS = {
  INIT_GAME: "api/Checkers/initGame",
  RESET_GAME: "api/Checkers/resetGame",
  MOVE_CHECKER: "api/Checkers/moveChecker",
};

export {
  CORS_URL,
  BASE_URL,
  METHOD_GET,
  METHOD_POST,
  PLAYER1,
  PLAYER2,
  SERVER_HEALTH,
  SERVER_PROMPT,
  USER_CONNECTED_PROMPT,
  API_URLS,
  ROOT_PATH,
  PLAYER_ASSIGNED,
  INIT_BOARD,
  NEW_PLAYER,
  RESET_BOARD,
  MOVE_MADE,
  PLAYER_DISCONNECTED,
  GAME_FULL,
  SOCKET_ERROR,
  RESET_GAME,
  CONNECTION,
  DISCONNECT,
  MOVE,
  USER_DISCONNECT_PROMPT,
  ERROR,
  ERROR_INIT_GAME,
  FAILED_INIT_GAME,
  ERROR_RESETTING_GAME,
  FALED_RESETTING_GAME,
  ERROR_MOVING_CHECKER_OR_CHECK_WINNER,
  INVALID_MOVE,
};
