import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import AddNewAdmin from './Pages/AddNewAdmin'
import AddNewDoctor from './Pages/AddNewDoctor'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import Message from './Pages/Message'
import Sidebar from './Pages/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main'
import axios from 'axios'
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context)

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchAdmin()
  }, [isAuthenticated]);
  
  return (
    <>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/addNewAdmin' element={<AddNewAdmin/>}/>
          <Route path='/addNewDoctor' element={<AddNewDoctor/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/messages' element={<Message/>}/>
        </Routes>
        <ToastContainer position='top-center'/>
      </Router>
    </>
  )
}

export default App
