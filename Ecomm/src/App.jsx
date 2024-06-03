import './App.css'
import Home from './Pages/Home'
import {RouterProvider, Routes, Route} from 'react-router-dom'
import Product from './Pages/Product'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
