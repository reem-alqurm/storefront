import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';

import { inactive, activate } from '../../store/categories.js';
import { getProducts } from '../../store/products.js';

const ProductViewer = (props) => {
  return (
    <>
    {console.log(props)}
    <h4>Browse Our Categories</h4>
    <IconButton onClick={() => props.activate('Electronics')}>Electronics</IconButton>
    <IconButton onClick={() => props.activate('Food')}>Food</IconButton>
    <Paper>
    <Typography variant="h2" component="h2">Products</Typography>
      <Grid container justify="center" spacing={5}>
        {props.products.productsList.map(product => {
          return (
            <Grid item>
              <Card>
                <CardHeader title={product.name} />
                <CardContent>
                  <Typography variant="p" component="p">Description here...</Typography>
                </CardContent>
                <CardActions>
                  <IconButton>ADD TO CART</IconButton>
                  <IconButton>VIEW DETAILS</IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
    </Grid>
    </Paper>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = {
  inactive,
  activate,
  getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);