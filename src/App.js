import './App.css';
import Canvas from './Canvas';

function App() {

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <Canvas country={{name: "Russia", correctColors: ['#FFFFFF', '#0052A5', '#D52B1E'], randomizedColors: shuffleArray(['#FFFFFF', '#0052A5', '#D52B1E'])}} /> */}
        <Canvas country={{name: "Estonia", correctColors: ['#0072CE', '#000000', '#FFFFFF'], randomizedColors: shuffleArray(['#0072CE', '#000000', '#FFFFFF'])}} />
      </header>
    </div>
  );
}

export default App;
