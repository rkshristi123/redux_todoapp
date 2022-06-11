import { counter_dec, counter_inc } from "./actiontype";

export const counterreducer=(state={count:0},{type,payload}) =>{
switch(type){
    case counter_inc:{
        state.count++
        return {...state}
    }
    case counter_dec:{
        state.count--
        return {...state}
    }
    default:{
        return state;
    }
}
}