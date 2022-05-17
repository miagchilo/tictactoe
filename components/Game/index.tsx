import PlayerCard from '../PlayerCard';
import Board from '../Board';
import Winner from '../Winner';
import Tie from '../Tie';
import classes from './index.module.scss';
import Avatar1 from '../../public/avatar1.png';
import Avatar2 from '../../public/avatar2.png';
import { motion } from 'framer-motion';

interface Props {
  status: string;
  players: string[];
  turn: string; // 'X' || 'O'
  board: string[];
  winnerIndex: number | null;
  handlePlay(index: number): void;
  handleRefreshGame(): void;
}

const Game = (props: Props) => {
  const { status, players, turn, board, winnerIndex, handlePlay, handleRefreshGame } = props;

  const renderPlayers = players.map((player, index) => {
    const isPlayersTurn = !!(turn === 'X' && !index || turn === 'O' && index);
    return (
      <div key={index}>
        <PlayerCard
          index={index}
          avatar={!index ? Avatar1 : Avatar2}
          name={player}
          symbol={!index ? "X" : "O"}
          active={isPlayersTurn}
        />
        <p>{isPlayersTurn ? "Your turn" : ''}</p>
      </div>
    );
  });

  const renderWinner = () => (
    <Winner
      avatar={!winnerIndex ? Avatar1 : Avatar2}
      name={!winnerIndex ? players[0] : players[1]}
      handleRefreshGame={handleRefreshGame}
    />
  );

  const renderTie = () => (
    <Tie
      avatars={[Avatar1, Avatar2]}
      handleRefreshGame={handleRefreshGame}
    />
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.players}>
        {renderPlayers}
      </div>

        {status === 'finished'
          ? winnerIndex !== null
            ? renderWinner()
            : renderTie()
          : (
            <motion.div animate={{ opacity: [0, 1] }}>
              <Board board={board} handlePlay={handlePlay} />
            </motion.div>
          )
        }
    </div>
  );
};

export default Game;
