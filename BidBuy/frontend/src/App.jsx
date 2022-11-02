import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LogIn/Login.jsx';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <Router>
  
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Login />} />
     
    </Routes>
  </Router>
  );
}

export default App;
