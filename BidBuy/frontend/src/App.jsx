import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/LogIn/Login.jsx';
import Signup from './components/Signup/Signup';
import NavBar from './components/NavBar/NavBar';
import MyProfile from './components/MyProfile/MyProfile';
import MainPage from './components/MainPage/MainPage.jsx';
import HomePage from './components/HomePage/HomePage';
import MyAuctions from './components/MyAuctions/MyAuctions';
import MyBids from './components/MyBids/MyBids';
import MyFavorites from './components/MyFavorites/MyFavorites';
import ContactUs from './components/ContactUs/ContactUs';
import axios from 'axios';
import Cart from './components/Cart/cart';
import Address from './components/Address/Address';
import UploadFile from './components/Upload/upload.jsx';
import ProductPage from './components/Product/ProductPage';
import UploadProduct from './components/Product/UploadProduct';
import Forgot from './components/Forgot/Forgot';
import AdminMain from './components/AdminMain/AdminMain';
import AdminList from './components/AdminList/AdminList';
import AdminListDetail from './components/AdminListDetail/AdminListDetail';
import ProtectedRoute from './components/protectedRoutes.jsx';
import NotAuthorised from './components/NotAuthorised/notAuthorised.jsx';
import FormList from './components/FormList/formlist.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import UserList from './components/UserList/UserList.jsx';
import OrderList from './components/OrderList/OrderList.jsx';

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
      <Route path="/home" element={<HomePage/>} />
      <Route path="/navbar" element={<NavBar />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/address" element={<Address />} />
      <Route path="/myauctions" element={<MyAuctions />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/mybids" element={<MyBids />} />
      <Route path="/myfavs" element={<MyFavorites />} />
      <Route path="/profile" element={<MyProfile/>} />
      <Route path="/upload" element={<UploadFile/>} />
      {/* <Route path="/product" element={<ProductPage/>} /> */}
      <Route path="/product/:productId" element={<ProductPage/>} />
      <Route path="/uploadprod" element={<UploadProduct/>} />
      {/* <Route path="/forgot" element={<Forgot/>}/> */}
      {/* <Route path="/Admin" element={<AdminMain/>} /> */}
      <Route path="/AdminMain" element={<AdminMain/>} />
      <Route path="/notauthorised" element={<NotAuthorised/>} />
      <Route path="/AdminList" element={<AdminList/>} />
      <Route path="/AdminListDetail" element={<AdminListDetail/>} />
      <Route path="/FormList" element={<FormList/>} />
      <Route path="/ProductList" element={<ProductList/>} />
      <Route path="/UserList" element={<UserList/>} />
      <Route path="/OrderList" element={<OrderList/>} />
     
      
    </Routes>
  </Router>
  );
}

export default App;
