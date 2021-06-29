import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import CategoryViewer from './categories.js';

import { connect } from 'react-redux';

// import { inactive, activate } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';
import { addToCart } from '../../store/cart.js';

const ProductViewer = (props) => {
  return (
    <>
    {console.log(props)}
    <CategoryViewer />
    <Paper>
    <Typography variant="h2" component="h2">Products</Typography>
      <Grid container justify="center" spacing={5}>
        {props.products.productsList.map((product, idx) => {
          if (product.category === props.activeCategory) {
            return (
              <Grid item key={idx}>
                <Card>
                  <CardHeader title={product.name} />
                  <CardContent>
                    <Typography component="p">Description here...</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => props.addToCart(product)}>ADD TO CART</IconButton>
                    <IconButton>VIEW DETAILS</IconButton>
                  </CardActions>
                </Card>
              </Grid>
            )
            
          } else {
            return null;
          }
        })}
    </Grid>
    </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products, 
    activeCategory: state.categories.activeCategory,
    activeDescription: state.categories.activeDescription,
  }
}

const mapDispatchToProps = {
  // inactive,
  // activate,
  getProducts,
  addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);