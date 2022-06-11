import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterdec, counterinc } from '../store/action'

const Counterapp = () => {
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.count)
  return (
    <>
    <h1>Counter : {count}</h1>
    <div>
        <button onClick={()=>dispatch(counterinc())}>+</button>
        <button onClick={()=>dispatch(counterdec())}>-</button>
    </div>
    </>
  )
}

export default Counterapp