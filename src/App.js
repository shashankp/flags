import './App.css';
import Canvas from './Canvas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas country={{name: "Russia", correctColors: ['#FFFFFF', '#0052A5', '#D52B1E']}} />
      </header>
    </div>
  );
}

export default App;
