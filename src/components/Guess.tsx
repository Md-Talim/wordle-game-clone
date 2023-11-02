import { range } from '../utils';

const Guess = ({ value }: { value: string }) => {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
};

export default Guess;
