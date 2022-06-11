import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { updatedtodo } from '../store/action'
import { useDispatch} from 'react-redux'

const Edittodo = () => {
  const {id} =useParams()
  const ref=useRef()
  const dispatch=useDispatch()
  // console.log(id)
  const handleedit=()=>{
    let editvalue=ref.current.value 
    dispatch(updatedtodo(id,editvalue))
    ref.current.value=null
  }
  return (
    <div>
        <h1>EDIT TODO</h1>
        <input ref={ref} type="text" placeholder='write something...'/>
        <button onClick={handleedit}>ADD</button>

    </div>
  )
}

export default Edittodo