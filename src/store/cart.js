let initialState = {
    cart: [],
  }
  
  
  export default function CartReducer(state = initialState, action){
    let {type, payload} = action;
    switch(type) {
      case "ADD_TO_CART":
        return {...state, cart: [...state.cart, payload]}
      default:
        return state;
    }
  }
  
  export function addToCart(name) {
    return {
      type: "ADD_TO_CART",
      payload: name,
    }
  }