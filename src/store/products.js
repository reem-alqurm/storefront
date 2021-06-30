import axios from 'axios';

// let initialState = {
//   productsList: [
//     {_id: '5f1a51f01910080017657ed2', name: '1TB USB', 'category': 'Electronics', 'inStock': 963, 'price': 100.99},
//     {_id: '5f1a51f71910080017657ed3', name: 'Monitor', 'category': 'Electronics', 'inStock': 960, 'price': 100.99},
//     {_id: '5f1a51ff1910080017657ed4', name: 'Mouse', 'category': 'Electronics', 'inStock': 976, 'price': 100.99},
//     {_id: '5f1a52031910080017657ed5', name: 'Keyboard', 'category': 'Electronics', 'inStock': 982, 'price': 100.99},
//     {_id: '5f1a5f861910080017657ed7', name: 'TV', 'category': 'Electronics', 'inStock': 1973, 'price': 699},
//     {_id: '5f1a5f761910080017657ed6', name: 'Apples', 'category': 'Food', 'inStock': 979, 'price': 100.1},
//     {_id: '5f1a5faf1910080017657ed8', name: 'Calzones', 'category': 'Food', 'inStock': 929, 'price': 100.1},
//   ],
//   activeProduct: '',
// }

let initialState = {
  productsList: [],
  count: 0,
  activeProduct: '',
}

export default function productsReducer(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case "LOAD_PRODUCTS":
      return {
        count: payload.count,
        productsList: payload.results,
      }
    case "ACTIVATED":
      const products = getProducts(payload.category);
      return {...state, products: products}
    // case "DETAIL":
    //   const productDetail = state.filter(product => product._id === payload._id);
    //   return productDetail
    default: 
    return state;
  }
}

export const loadProducts = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/products')
  .then(response => {
    dispatch({
      type: 'LOAD_PRODUCTS',
      payload: response.data
    })
  })
}

export function getProducts(category){
  const products = initialState.productsList;
  const response = products.filter(product => product.category === category);
  return response;
}

// export function getProductDetail(product) {
//   return {
//     type: "DETAIL",
//     payload: product,
//   }
// }