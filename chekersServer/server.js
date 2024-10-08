import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import axios from "axios";
import {
  BASE_URL,
  METHOD_GET,
  METHOD_POST,
  PLAYER1,
  PLAYER2,
  CORS_URL,
  SERVER_HEALTH,
  SERVER_PROMPT,
  API_URLS,
  PLAYER_ASSIGNED,
  NEW_PLAYER,
  INIT_BOARD,
  GAME_FULL,
  RESET_GAME,
  RESET_BOARD,
  MOVE,
  MOVE_MADE,
  DISCONNECT,
  PLAYER_DISCONNECTED,
  ROOT_PATH,
  CONNECTION,
  USER_CONNECTED_PROMPT,
  ERROR_INIT_GAME,
  ERROR,
  FAILED_INIT_GAME,
  ERROR_RESETTING_GAME,
  FALED_RESETTING_GAME,
  ERROR_MOVING_CHECKER_OR_CHECK_WINNER,
  INVALID_MOVE,
  USER_DISCONNECT_PROMPT,
} from "./constants.js";

const app = express();

app.use(
  cors({
    origin: CORS_URL,
    methods: [METHOD_GET, METHOD_POST],
  })
);

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: CORS_URL,
    methods: [METHOD_GET, METHOD_POST],
  },
});

let players = [];

io.on(CONNECTION, async (socket) => {
  console.log(USER_CONNECTED_PROMPT, socket.id);

  if (players.length < 2) {
    const player = players.length === 0 ? PLAYER1 : PLAYER2;
    players.push({ id: socket.id, player });
    socket.emit(PLAYER_ASSIGNED, player);
    socket.broadcast.emit(NEW_PLAYER, { player });
    try {
      const response = await axios.get(`${BASE_URL}${API_URLS.INIT_GAME}`);
      io.emit(INIT_BOARD, response.data);
    } catch (error) {
      console.error(ERROR_INIT_GAME, error);
      socket.emit(ERROR, FAILED_INIT_GAME);
    }
  } else {
    socket.emit(GAME_FULL);
  }

  socket.on(RESET_GAME, async () => {
    try {
      const response = await axios.post(`${BASE_URL}${API_URLS.RESET_GAME}`);
      io.emit(RESET_BOARD, response.data);
    } catch (error) {
      console.error(ERROR_RESETTING_GAME, error);
      socket.emit(ERROR, FALED_RESETTING_GAME);
    }
  });

  socket.on(MOVE, async (data) => {
    try {
      const moveResponse = await axios.post(
        `${BASE_URL}${API_URLS.MOVE_CHECKER}`,
        data
      );
      const updatedGameState = moveResponse.data;

      io.emit(MOVE_MADE, updatedGameState);
    } catch (error) {
      console.error(ERROR_MOVING_CHECKER_OR_CHECK_WINNER, error);
      socket.emit(ERROR, INVALID_MOVE);
    }
  });

  socket.on(DISCONNECT, () => {
    console.log(USER_DISCONNECT_PROMPT, socket.id);
    players = players.filter((p) => p.id !== socket.id);
    io.emit(PLAYER_DISCONNECTED, { id: socket.id });
  });
});

app.get(ROOT_PATH, (req, res) => {
  res.send(SERVER_HEALTH);
});

server.listen(4000, () => {
  console.log(SERVER_PROMPT);
});
