import Game from './components/Game';
import Header from './components/Header';
import { WORDS } from './data';
import { sample } from './utils';

const App = () => {
  const answer = sample(WORDS);

  return (
    <div className="wrapper">
      <Header />

      <main className="game-wrapper">
        <Game answer={answer} />
      </main>
    </div>
  );
};

export default App;
