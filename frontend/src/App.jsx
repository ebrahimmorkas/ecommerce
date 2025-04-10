import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductCard from './components/ProductCard';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddProduct from './pages/vendor-pages/AddProduct';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/vendor/add-product' element={<AddProduct />}/>
    </Routes>
    {/* <Products /> */}
    </>
  )
}

export default App
