import { checkGuess } from '@/game-helpers';
import { range } from '@/utils';

interface Props {
  value: string;
  answer: string;
}

const Cell = ({ status, letter }: { status: string; letter: string }) => {
  return <span className={`cell ${status}`}>{letter}</span>;
};

const Guess = ({ value, answer }: Props) => {
  const results = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={results ? results[num].letter : ''}
          status={results ? results[num].status : ''}
        />
      ))}
    </p>
  );
};

export default Guess;
