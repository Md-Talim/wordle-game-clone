import { useState } from 'react';
import GuessResults from './GuessResults';
import GuessInput from './GuessInput';

const Game = ({ answer }: { answer: string }) => {
  const [guesses, setGuesses] = useState<string[]>([]);

  const handleSubmitGuess = (newGuess: string) => {
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
};

export default Game;
