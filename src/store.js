import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const initState = { cart: { items: cartItems } };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  initState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;



/*
const initialState = {};
if(localStorage.getItem('cartItem')){ 
  initialState.cart = {items: JSON.parse(localStorage.getItem('cartItems'))}
} 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(  
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
*/
