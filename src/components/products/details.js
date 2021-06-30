import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Detail(props){

  let products = useSelector(state => state.products)
  // console.log('this is products from state', products);
  const { id } = useParams();
  // console.log(id);
  const result = products.productsList.filter(product => product._id === id);
  console.log('this is result', result[0]);
  let item = result[0];

  return(
    <>
    <h1>Product Detail</h1>
    <ul>
      <li>{item.name}</li>
      <li>In Stock: {item.inStock}</li>
      <li>Price: {item.price}</li>
      <li>Category: {item.category}</li>
    </ul>
    </>
  )
}