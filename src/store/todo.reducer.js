import { addtodo } from "./action"
import {  add_todo_error, add_todo_loading, add_todo_success, complete_todo, delete_todo, get_todo_error, get_todo_loading, get_todo_success, updated_todo } from "./actiontype"

const initialstate={
   gettodos:{
    loading:false,
    error:false,
    data:[],
   },
   addtodo:{
    loading:false,
   
   } 
    
}

export const todoreducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case get_todo_success:{
            return {
                ...state,
               gettodos:{
                data:payload,
                loading:false
            }  
               }
            
        }
        case get_todo_loading:{
            return {
                ...state,
                gettodos:{
                    loading:true
                }
           
            }
        }
        case get_todo_error:{
            return {
                ...state,
                gettodos:{
                    error:true,
                    loading:false
                }
               
            }
        }
        case add_todo_loading:{
         
            return {
                ...state,
              addtodo:{  loading:true}
            }
        }
        case add_todo_success:{
         
            return {
                ...state,
                gettodos:{
                    data:[...state.gettodos.data,payload]
                },addtodo:{
                    loading:false
                }
            }
        }
        case add_todo_error:{
         
            return {
                ...state,
                addtodo:{loading:false}
            }
        }
        case delete_todo:{
           
           
            return {
                ...state,
                gettodos:{
                    data:payload,
                    loading:false
                }
            
              };
        }
        case complete_todo:{
           return{...state}
        }
        case updated_todo:{
           
            return {...state}
        }
        default:{
            return state;
        }
    }
}