import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtodo, deletetodo, gettodos,completedtodo } from '../store/action'


const Todoapp = () => {
    const ref=useRef()
    const dispatch=useDispatch()
    const {loading,error,data:todos}=useSelector((state)=>state.todo.gettodos)
    const {loading:addbuttonloading}=useSelector((state)=>state.todo.addtodo)
const addnew=()=>{
  let value=ref.current.value 
  dispatch(addtodo({value:value,complete:false,edit:"edit"}))
  ref.current.value=null
}
const handleremove=(id)=>{
    dispatch(deletetodo(id));
    //  console.log(id)
}
const handlecomplete=(id,complete)=>{
 console.log(id)
    dispatch(completedtodo(id,complete))

  }

useEffect(()=>{
    gettodos(dispatch)
   
},[])
if(loading)
return <div>loading...</div>
if(error)
return<div>something went wrong...</div>
console.log(todos)
  return (
    <div>
    <h1>TodoList</h1>
    <div>
        <input  ref={ref} type="text" placeholder='add todo..'/>
        <button onClick={addnew} disabled={addbuttonloading}>add</button>
    </div>
    <br/>
    {
todos.map((el)=>(

    <div key={el.id} >
        <Link to={`/todos/${el.id}`}>  <h3  style={{ color: el.complete ? "green" : "red" }}>{el.value}</h3></Link>
      
        <button onClick={()=>handleremove(el.id)}>delete</button>
        <button onClick={()=>handlecomplete(el.id,el.complete)}>completed</button>

    </div>
))
}
    </div>
  )
}

export default Todoapp