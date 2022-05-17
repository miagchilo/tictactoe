import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import classes from '../styles/Home.module.scss';
import Logo from '../components/Logo';
import SelectGame from '../components/SelectGame';
import NameCollectionForm from '../components/NameCollectionForm';
import Game from '../components/Game';
import useTicTacToe from '../hooks/useTicTacToe';

const Home: NextPage = () => {
  const {
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
  } = useTicTacToe();

  const start = (
    <>
      <Logo />
      {!type ? (
        <SelectGame handleGameSelection={handleGameSelection} />
      ) : (
        <NameCollectionForm
          type={type}
          handlePlayerSubmit={handlePlayerSubmit}
        />
      )}
    </>
  );

  return (
    <div>
      <Head>
        <title>Tic Tac Toe</title>
        <meta
          name="description"
          content="Tic Tac Toe App created using Next.js & Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <div className={classes.container}>
          <Image
            className={`${classes.background_placeholder} ${classes.desktop}`}
            src="/galaxy-placeholder-1000.png"
            alt="galaxy"
            layout="fill"
          />
          <Image
            className={`${classes.background_placeholder} ${classes.mobile}`}
            src="/galaxy-placeholder-mobile.png"
            alt="galaxy"
            layout="fill"
          />
          <video
            src="/billions-of-stars-in-the-milky-way-galaxy-seamles-2021-10-21-03-23-18-utc.mp4"
            placeholder="/galaxy-placeholder-1000.png"
            playsInline
            autoPlay
            muted
            loop
          />
          <div className={classes.gradient_overlay} />
          {status === 'created' && start}
          {(status === 'started' || status === 'finished') && (
            <Game
              status={status}
              players={players}
              turn={turn}
              board={board}
              winnerIndex={winnerIndex}
              handlePlay={handlePlay}
              handleRefreshGame={handleRefreshGame}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
