import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import Header from './Components/Header';
import Login from './Page/Login';
import Register from './Page/Register';
function App() {
  return (
  <div className="App">
    <Header/>
    <main>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </main>
  </div>
  );
}

export default App;
