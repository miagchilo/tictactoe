import { useEffect, useMemo, useState } from 'react';

interface ReturnValue {
  status: 'created' | 'started' | 'finished';
  type: 'single' | 'multi' | null;
  players: string[];
  turn: string;
  board: string[];
  winnerIndex: number | null;
  handleGameSelection(selection: string): void;
  handlePlayerSubmit(players: string[]): void;
  handlePlay(index: number): void;
  handleRefreshGame(): void;
}

const useTicTacToe = (): ReturnValue => {
  const [status, setStatus] = useState<'created' | 'started' | 'finished'>('created');
  const [type, setType] = useState<'single' | 'multi' | null>(null);
  const [players, setPlayers] = useState(new Array(2).fill(''));
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(new Array(9).fill(''));
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null);

  const winningCombos = useMemo(() => {
    return [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }, []);

  useEffect(() => {
    for (let combo of winningCombos) {
      const first = board[combo[0]];
      const second = board[combo[1]];
      const third = board[combo[2]];

      // If below is true, will skip the rest of the block and move onto next iteration
      if (!first && !second && !third) continue;

      if (first === second && second === third) {
        setWinnerIndex(turn === 'X' ? 1 : 0);
        setStatus('finished');
        break;
      }

      if (!board.includes('')) {
        setStatus('finished');
      }
    }
  }, [board, turn, winningCombos]);

  const handleGameSelection = (selection: 'single' | 'multi'): void => {
    setType(selection);
  }

  const handlePlayerSubmit = (names: string[]): void => {
    const newPlayers = names.length < 2 ? [...names, 'Bot'] : [...names];
    setPlayers(newPlayers);
    setStatus('started');
  }

  const handleBotPlay = (newBoard: string[]) => {
    if (winnerIndex !== null) return;

    setTimeout(() => {
      console.log('newBoard', newBoard)
      let indexes: number[] = [];
      board.forEach((element, index) => !element && indexes.push(index));
  
      const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];
      console.log('randomIndex', randomIndex)
      newBoard[randomIndex] = 'O';
  
      setBoard(newBoard);
      setTurn('X');
    }, 1000)
  }
  
  const handlePlay = (index: number): void => {

    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');

  }

  const handleRefreshGame = (): void => {
    setTurn('X');
    setBoard(new Array(9).fill(''));
    setWinnerIndex(null);
    setStatus('started');
  }

  return {
    status,
    type,
    players,
    turn,
    board,
    winnerIndex,
    handleGameSelection,
    handlePlayerSubmit,
    handlePlay,
    handleRefreshGame,
  };
};

export default useTicTacToe;
