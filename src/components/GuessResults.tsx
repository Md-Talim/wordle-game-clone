import { NUM_OF_GUESSES_ALLOWED } from '@/constants';
import { range } from '@/utils';
import { Guess } from '@/components';

interface Props {
  guesses: string[];
  answer: string;
}

const GuessResults = ({ guesses, answer }: Props) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} value={guesses[index]} answer={answer} />
      ))}
    </div>
  );
};

export default GuessResults;
