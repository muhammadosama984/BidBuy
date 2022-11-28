import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LogIn/Login.jsx';
import Signup from './components/Signup/Signup';
import NavBar from './components/NavBar/NavBar';
import MyProfile from './components/MyProfile/MyProfile';
import MainPage from './components/MainPage/MainPage.jsx';
import MyAuctions from './components/MyAuctions/MyAuctions';
import MyBids from './components/MyBids/MyBids';
import MyFavorites from './components/MyFavorites/MyFavorites';
import axios from 'axios';
import Cart from './components/Cart/cart';
import Address from './components/Address/Address';
import UploadFile from './components/Upload/upload.jsx';
import ProductPage from './components/Product/ProductPage';
import UploadProduct from './components/Product/UploadProduct';
import Forgot from './components/Forgot/Forgot';
export const api = axios.create({
  baseURL: `http://localhost:3000/api/`
})

function App() {
  return (
    <Router>
  
    <Routes>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<MainPage />} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<Address />} />
      <Route path="/myauctions" element={<MyAuctions />} />
      <Route path="/mybids" element={<MyBids />} />
      <Route path="/myfavs" element={<MyFavorites />} />
      <Route path="/profile" element={<MyProfile/>} />
      <Route path="/upload" element={<UploadFile/>} />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/uploadprod" element={<UploadProduct/>} />
      <Route path="/forgot" element={<Forgot/>}/>
      
     
    </Routes>
  </Router>
  );
}

export default App;
