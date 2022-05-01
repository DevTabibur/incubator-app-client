import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login';
import Inventory from './Pages/Inventory/Inventory';
import { createContext } from 'react';
import useProducts from './Pages/Hooks/useProducts';

// ** demo sites https://www.keydesign-themes.com/incubator/shop-classic/

export const ProductContext = createContext([]);

function App() {
  
  const [products, setProducts] = useProducts();

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/inventory" element={<Inventory/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      {/* <Footer/> */}

    </ProductContext.Provider>
  );
}

export default App;
