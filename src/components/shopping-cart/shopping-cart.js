import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function Cart(props) {

  let cart = useSelector(state => state.cart);

  return(
    <div>
      {console.log(cart)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)