import './App.css'
import Home from './Pages/Home'
import {RouterProvider, Routes, Route} from 'react-router-dom'
import Product from './Pages/Product'
import Login from './Pages/Login'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
