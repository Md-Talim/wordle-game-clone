import Game from './components/Game';
import Header from './components/Header';
import { WORDS } from './data';
import { getAnswer } from './utils';

const App = () => {
  const answer = getAnswer(WORDS);

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
