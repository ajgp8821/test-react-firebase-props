import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>Props</h1>
      <div className="row">
        <div className="col">
          <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo Card 1"
            texto="Texto Card 1"
          />
        </div>
        <div className="col">
          <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo Card 2"
            texto="Texto Card 2"
          />
        </div>
        <div className="col">
          <Cards
            imagen="https://lorempixel.com/150/150"
            titulo="Titulo Card 3"
            texto="Texto Card 3"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
