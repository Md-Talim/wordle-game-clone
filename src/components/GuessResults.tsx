const GuessResults = ({ guesses }: { guesses: string[] }) => {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
