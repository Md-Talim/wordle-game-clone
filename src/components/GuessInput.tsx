import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  gameStatus: 'running' | 'won' | 'lost';
  handleSubmitGuess: (guess: string) => void;
}

const GuessInput = ({ gameStatus, handleSubmitGuess }: Props) => {
  const [newGuess, setNewGuess] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // If the length of the guessed input is not equal to 5
    // then don't do anything else
    if (newGuess.length !== 5) {
      window.alert('Please enter exactly 5 letters.');
      return;
    }

    // Add the guess to the guesses array
    handleSubmitGuess(newGuess);

    setNewGuess('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextGuess = event.target.value.toUpperCase();

    setNewGuess(nextGuess);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={handleChange}
        required
        type="text"
        value={newGuess}
        disabled={gameStatus !== 'running'}
      />
    </form>
  );
};

export default GuessInput;
