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
import VendorDashboard from './pages/vendor-pages/VendorDashboard';
import VendorProfile from './pages/vendor-pages/VendorProfile';
import MyProducts from './pages/vendor-pages/MyProducts';
import VendorSoldItems from './pages/vendor-pages/VendorSoldItems';
import CustomerOrders from './pages/vendor-pages/CustomerOrders';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/vendor/add-product' element={<AddProduct />}/>
      <Route path='/vendor/dashboard' element={<VendorDashboard />} />
      <Route path='/vendor/profile' element= {<VendorProfile />} />
      <Route path='vendor/products' element={<MyProducts />}/>
      <Route path='/vendor/sold-items' element={<VendorSoldItems />} />
      <Route path='/vendor/orders' element={<CustomerOrders />} />
    </Routes>
    {/* <Products /> */}
    </>
  )
}

export default App
