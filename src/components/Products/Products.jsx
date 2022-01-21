import React from "react";
import Grid from "@material-ui/core";

// temporary products before fetching products from the API

const product = [
    { id: 1, name: 'Shoes', description: 'Snickers', price: '$10'},
    { id: 2, name: 'Shoes', description: 'heels', price: '$35'},
    { id: 3, name: 'Macbook', discription: 'Apple Macbook', price: '$100'},
];


const Products = () => {
    <main>
        {/* this is a material ui grid that allows  you put items in grid */}
        <Grid container justify="center" spacing={4}>
            {product.map((product) => (
                <Grid item key = {product.id} xs = {12} sm = {6} md = {4} lg = {3}>
                    <Product product = {product} />
                </Grid>
            ))}
        </Grid>
    </main>


}

export default Products;