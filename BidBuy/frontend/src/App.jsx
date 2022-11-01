import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LogIn/Login.jsx';

function App() {
  return (
    <Router>
  
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Login />} />
     
    </Routes>
  </Router>
  );
}

export default App;
