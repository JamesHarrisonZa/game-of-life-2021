import Link from 'next/link';

const GameRandom: React.FC = () => {
  return (
    <>
      <h1>Will randomise the grid</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default GameRandom;
