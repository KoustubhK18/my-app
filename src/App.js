import './App.css';
import CardComponent from './modules/CardComponent';
import CoverComponent from './modules/CoverComponent';
import NavBar from './modules/NavBar';
import ReviewTiles from './modules/ReviewTiles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar />
      <CoverComponent />
      <ReviewTiles />
    </div>
  );
}

export default App;
