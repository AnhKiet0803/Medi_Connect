import logo from './logo.svg';
import './App.css';
import HomePage from './Page/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <main>
      <div className="container">
        <Routes>
          <Route path='/' Component={HomePage}/>
        </Routes>
      </div>
    </main>
  </div>
  );
}

export default App;
