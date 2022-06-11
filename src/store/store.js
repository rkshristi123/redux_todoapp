import { counterreducer } from "./counter.reducer";
import { todoreducer } from "./todo.reducer";
import {legacy_createStore,combineReducers,applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
const rootreducer=combineReducers({
    counter:counterreducer,
    todo:todoreducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(rootreducer, composeEnhancers(applyMiddleware(thunk)))