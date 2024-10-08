import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../main'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Message = () => {
  const [message, setMessage] = useState([])
  const { isAuthenticated } = useContext(Context)
  
  useEffect(()=>{
    const fetchMessages = async() => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/v1/message/getAll",{withCredentials: true})
        setMessage(data.messages)
      } catch (error) {
        console.log("Error while fetching message",error)
      }
    }
    fetchMessages()
  }, [])

  if(!isAuthenticated) return <Navigate to={"/login"}/>
  
  return (
    <section className="page messages">
    <h1>MESSAGE</h1>
    <div className="banner">
      {message && message.length > 0 ? (
        message.map((element) => {
          return (
            <div className="card" key={element._id}>
              <div className="details">
                <p>
                  First Name: <span>{element.firstName}</span>
                </p>
                <p>
                  Last Name: <span>{element.lastName}</span>
                </p>
                <p>
                  Email: <span>{element.email}</span>
                </p>
                <p>
                  Phone: <span>{element.phone}</span>
                </p>
                <p>
                  Message: <span>{element.message}</span>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <h1>No Messages!</h1>
      )}
    </div>
  </section>
  )
}

export default Message
