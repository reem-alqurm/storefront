import React from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import {connect} from 'react-redux';

const SimpleCart = (props) => {
  if(props.cart.cart.length !== null){
    return(
      <>
        <Card>
            <CardContent>
              {props.cart.cart.map((product, idx) => {
                return (
                  <Typography key={idx}>
                    ${product.price}: {product.name}
                  </Typography>
                )
              })}
            </CardContent>

        </Card>
      </>
    )
  } else {
    return(
      <>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(SimpleCart);