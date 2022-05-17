import { useState, useMemo, FormEvent } from 'react';
import classes from './index.module.scss';

interface Props {
  type: string;
  handlePlayerSubmit(names: string[]): void;
}

const NameCollectionForm = (props: Props) => {
  const { type, handlePlayerSubmit } = props;

  const playersDefaultState = type === 'single' ? [''] : ['', ''];
  const [players, setPlayers] = useState(playersDefaultState);

  const handleInput = (e: FormEvent<HTMLInputElement>, index: number) => {
    const newPlayers = [...players];
    newPlayers[index] = e.currentTarget.value;
    setPlayers(newPlayers);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlePlayerSubmit(players);
  }

  const canStart = useMemo(
    () => players.every((player) => player),
    [players]
  );

  const input = type === 'single' ? (
    <div className={classes.form_group}>
      <label>What is your name?</label>
      <input
        type="text"
        maxLength={12}
        value={players[0]}
        onInput={(e) => handleInput(e, 0)}
      />
    </div>
  ) : (
    <>
      <div className={classes.form_group}>
        <label>PLAYER 1</label>
        <input
          type="text"
          maxLength={12}
          value={players[0]}
          onInput={(e) => handleInput(e, 0)}
        />
      </div>
      <div className={classes.form_group}>
        <label>PLAYER 2</label>
        <input
          type="text"
          maxLength={12}
          value={players[1]}
          onInput={(e) => handleInput(e, 1)}
        />
      </div>
    </>
  );

  return (
    <div className={classes.wrapper}>
      <form onSubmit={handleSubmit}>
        {input}
        <button
          type="submit"
          className={`background_gradient_green_blue`}
          disabled={!canStart}
        >
          START
        </button>
      </form>
    </div>
  );
};

export default NameCollectionForm;
