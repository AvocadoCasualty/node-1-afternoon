const products = require('../products.json')

module.exports = {
    getProductId: (req, res) => {
        const { products_id } =req.params
        const product = products.find(element => element.id === +products_id)
        if(product) {
            res.status(200).send(product)
        } else {
            res.status(500).send("Item not in list.")
        }
    }
}