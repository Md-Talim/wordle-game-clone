import { ChangeEvent, FormEvent, useState } from 'react';
import GuessResults from './GuessResults';

const Game = () => {
  const [value, setValue] = useState('');
  const [guesses, setGuesses] = useState(['']);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // If the length of the guessed input is not equal to 5
    // then don't do anything else
    if (value.length !== 5) {
      window.alert('Please enter exactly 5 letters.');
      return;
    }

    // Add the entered value to the guesses array
    setGuesses([...guesses, value]);
    setValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextGuess = event.target.value.toUpperCase();

    setValue(nextGuess);
  };

  return (
    <>
      <GuessResults guesses={guesses} />
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
