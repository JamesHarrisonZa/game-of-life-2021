import Link from 'next/link';

const GameFortyTwo: React.FC = () => {
  return (
    <>
      <h1>42</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default GameFortyTwo;
