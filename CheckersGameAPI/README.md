# Checkers Game - Fullstack .Net + Angular/React Assignment

<a href="https://imgbb.com/"><img src="https://i.ibb.co/1rvMbLz/2024-10-08-111833.png" alt="2024-10-08-111833" border="1"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Dynamic Checkers Board Creation](#dynamic-checkers-board-creation)
- [Player Movement](#player-movement)
- [Multiplayer Functionality](#multiplayer-functionality)
- [Game Rules](#game-rules)
- [How to Run](#how-to-run)
- [Folder Structure](#folder-structure)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)
- [Contributing](#contributing)
- [Author](#author)

## Project Description

This project is a basic implementation of a Checkers Game with both frontend and backend functionality. The frontend is developed using React, while the backend is developed using .Net. and with NodeJS with express The main objective is to dynamically create a checkers board and allow two players to play against each other following the official game rules. Multiplayer functionality is supported using Socket.IO for real-time gameplay between two players.

## Technologies Used

<strong> Frontend: </strong> React, Typescript, Redux toolkit.

<strong> Backend: </strong> .NET and Node.JS with express.

<strong> WebSocket Library: </strong> Socket.IO.

## Dynamic Checkers Board Creation:

The checkers board is created dynamically using the backend server.
The board follows the standard 64-square format, with only the 32 dark squares being active for gameplay.

## Player Movement:

Players can move their checkers pieces diagonally forward according to official checkers rules.

Players can only control their own pieces.
Jumping over opponent pieces to capture them is implemented.

## Multiplayer Functionality:

Two players can join a game session from separate browsers.

Players are notified when another player joins the game.

A reset button allows players to restart the game at any time.

## Game Rules:

Standard rules of checkers are followed, including piece movement and capturing (jumping).
The game ends when a player captures all of the opponent's pieces or no further moves are available.

## How to Run

1.  <strong> Clone the Repository: </strong>

        1. git clone https://github.com/roy845/Compie-Fullstack-Assignment.git

2.  <strong> Install Dependencies: </strong>

- <strong> Backend (.NET setup): </strong>

  - Open the folder CheckersGameApi and opent the file CheckersGameAPI.sln in Visual Studio 2022 and run the project.

- <strong> Backend (NodeJs with express - SocketIO server): </strong>

  - Open the folder chekersServer in Visual Studio Code and run the commands in the terminal:

        1. npm install
        2. npm start

- <strong> Frontend (React): </strong>

  - Open the folder checkers-app in Visual Studio Code and run the commands in the terminal:

        1. npm install
        2. npm start

## Folder Structure

<strong> /CheckersGameApi - </strong> Contains .NET backend code.
<strong> /checkers-app - </strong> Contains React frontend code.
<strong> /chekersServer - </strong> Contains NodeJS with express and Socket.IO integration.

## Screenshots

- <strong> Landing Page: </strong>

  <a href="https://ibb.co/LYWjnyb"><img src="https://i.ibb.co/ZGP4Wrt/Checkers-Game-landing-page.png" alt="Checkers-Game-landing-page" border="1"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

- <strong> Checkers Move: </strong>
  <a href="https://ibb.co/K7fgShf"><img src="https://i.ibb.co/0Z6Lv26/2024-10-08-105524.png" alt="2024-10-08-105524" border="1"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

- <strong> illegal Move: </strong>
  <a href="https://ibb.co/Bg9j79B"><img src="https://i.ibb.co/mH3tY34/2024-10-08-105748.png" alt="2024-10-08-105748" border="1"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

- <strong> Player WINS: </strong>
  <a href="https://ibb.co/bXC1d1r"><img src="https://i.ibb.co/1TPZ2Z9/2024-10-08-110138.png" alt="2024-10-08-110138" border="1"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

- <strong> Reset The Game: </strong>

  <a href="https://ibb.co/D9hxCVY"><img src="https://i.ibb.co/wSV9W07/Checkers-Game-reset-game.png" alt="Checkers-Game-reset-game" border="1"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

## Conclusion

This project demonstrates the integration of frontend and backend technologies to create a functional multiplayer checkers game. It follows the assignment's constraints and focuses on core gameplay elements.

## Contributing

Contributions are welcome!

Please fork the repository and submit a pull request with your changes.

## Author

Roy Atali
