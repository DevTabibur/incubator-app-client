import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login';
import { createContext } from 'react';
import useProducts from './Pages/Hooks/useProducts';
import Blog from './Pages/Blogs/Blog';
import MyItems from './Pages/MyItems/MyItems';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItem from './Pages/AddItems/AddItem';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Register from './Pages/Shared/Register/Register';
import SingleInventory from './Pages/SingleInventory/SingleInventory';

export const ProductContext = createContext([]);

function App() {

  const [products, setProducts] = useProducts();

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/manage-inventory" element={<ManageInventory/>}></Route>

        <Route path='/add-item' element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }></Route>

        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems/>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:id' element={
          <RequireAuth>
            <SingleInventory/>
          </RequireAuth>
        }></Route>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>

    </ProductContext.Provider>
  );
}

export default App;
