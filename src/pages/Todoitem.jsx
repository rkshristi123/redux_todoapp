import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Todoitem = () => {
    const {id} =useParams()
    const [item,setItem]= useState({})
  
    useEffect(()=>{
        axios.get(`http://localhost:8080/todos/${id}`)
        .then((r)=>{
         setItem(r.data)
         console.log(r.data)
        })
    },[id])
  return (
    <div><h1>Todo Item</h1>
        
            
               <h3>{item.value}</h3> 
               <Link to={`/todos/${item.id}/${item.edit}`}> <button>edit</button></Link>
              
        
        
    </div>
  )
}

export default Todoitem