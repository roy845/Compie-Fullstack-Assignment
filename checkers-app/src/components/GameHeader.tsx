import "../styles/GameHeader.css";

type GameHeaderProps = {
  title: string;
};

const GameHeader = ({ title }: GameHeaderProps): JSX.Element => {
  return <h1 className="game-header">{title}</h1>;
};

export default GameHeader;
