import axios from "axios";
import {  add_todo_error, add_todo_loading, add_todo_success, complete_todo, counter_dec, counter_inc, delete_todo,  get_todo_error, get_todo_loading, get_todo_success, updated_todo } from "./actiontype";

// counter
export  const counterinc= ()=>({type:counter_inc})

export const counterdec=()=>({type:counter_dec})

// todo
export const gettodos=(dispatch)=>{
    dispatch({type:get_todo_loading})
   return axios.get( " http://localhost:8080/todos")
    .then((res)=>{
       
            dispatch( {type:get_todo_success,payload:res.data})
    
        
    })
    .catch(()=>{
       dispatch({type:get_todo_error})
    })
   }
export const addtodo=(payload)=>(dispatch)=>{
    dispatch({type:add_todo_loading})
    axios.post(" http://localhost:8080/todos",payload)
    .then((r)=>{
        dispatch ({type:add_todo_success,payload:r.data})
    })
    .catch(()=>{
        dispatch({type:add_todo_error})
     })
   
}
export const deletetodo=(id)=>(dispatch)=>{
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((res)=>{
        this.setState({
            filtered:res

        })

    }) 
    gettodos(dispatch)

}


export const completedtodo=(id,complete)=>(dispatch)=>{
   
    let global={
        API: ('http://localhost:8080')
    }

        axios.patch(global.API + "/todos/" +  id, {
            complete:!complete
          })
       gettodos(dispatch)
 
}
export const updatedtodo=(id,editvalue)=>(dispatch)=>{
    let global={
        API: ('http://localhost:8080')
    }

        axios.patch(global.API + "/todos/" +  id, {
            value:editvalue
          })
       gettodos(dispatch)
 
}


