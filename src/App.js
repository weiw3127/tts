import './App.css';
import Top from './cpn/Top';
import Keyword from './cpn/Keyword';

function App() {
  return (
    <div className="App">
      <h1>Trending Topic</h1>
      <div className='container'>
        <Keyword/>
        <Top/>
      </div>
    </div>
  );
}

export default App;
