import { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../constants';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';
import LostBanner from './LostBanner';
import WonBanner from './WonBanner';

const Game = ({ answer }: { answer: string }) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'running' | 'won' | 'lost'>(
    'running',
  );

  const handleSubmitGuess = (newGuess: string) => {
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (newGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === 'won' && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
};

export default Game;
