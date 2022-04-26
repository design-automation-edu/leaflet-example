import './App.css';
import { LeafMap } from './components/LeafMap'

function App() {
  return (
    <div className="App">
      <header id="header">
        <p>
          Test Leaflet.
        </p>
      </header>
      <div id="sliders">
        <p>
          Sliders.
        </p>
      </div>
      <div id="map">
        <LeafMap />
      </div>
    </div>
  );
}

export default App;
