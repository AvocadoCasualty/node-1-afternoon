const products = require('../products.json')

module.exports = {
    getAllProducts: (req, res) => {
        const { price } = req.query
        if(price) {
            const filteredProducts = products.filter(val => val.price >= +price)
            res.status(200).send(filteredProducts)
        } else {
            res.status(200).send(products)
        }
    }
}