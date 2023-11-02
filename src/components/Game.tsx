import { ChangeEvent, FormEvent, useState } from 'react';
import GuessResults from './GuessResults';

const Game = ({ answer }: { answer: string }) => {
  const [value, setValue] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // If the length of the guessed input is not equal to 5
    // then don't do anything else
    if (value.length !== 5) {
      window.alert('Please enter exactly 5 letters.');
      return;
    }

    // Add the entered value to the guesses array
    if (guesses.length <= 0) {
      setGuesses([value]);
    } else {
      setGuesses([...guesses, value]);
    }

    setValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextGuess = event.target.value.toUpperCase();

    setValue(nextGuess);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          maxLength={5}
          minLength={5}
          onChange={handleChange}
          required
          type="text"
          value={value}
        />
      </form>
    </>
  );
};

export default Game;
