const express = require( 'express' )


const app = express();
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const SERVER_PORT = 4000;

app.use(express.json());

app.get('/api/products', getProducts.getAllProducts )
app.get(`/api/products/:products_id`, getProduct.getProductId)

app.listen(SERVER_PORT, () => console.log(`Server is running on Port ${SERVER_PORT}`))