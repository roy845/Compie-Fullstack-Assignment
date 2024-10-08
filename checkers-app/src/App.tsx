import "./App.css";
import CheckersGame from "./components/CheckersGame";
import { SocketProvider } from "./context/SocketContext";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <CheckersGame />
      </SocketProvider>
    </div>
  );
}

export default App;
