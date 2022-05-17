

import Square from '../Square';
import classes from './index.module.scss';

interface Props {
  board: string[];
  handlePlay(index: number): void;
}

const Board = (props: Props) => {
  const { board, handlePlay } = props;

  return (
    <div className={classes.wrapper}>
      {board.map((value, index) => (
        <Square
          key={index}
          index={index}
          value={value}
          handlePlay={handlePlay}
        />
      ))}
    </div>
  );
};

export default Board;
