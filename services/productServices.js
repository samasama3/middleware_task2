const { productDB } = require('../database/productDB')

const getProducts = ((req, res)=>{
    res.json(productDB)
})

const getProductsById = (req, res, next) => {
    const id = parseInt(req.params.id);
    const product = productDB.find(p => p.id === id);
    try {
        if (!product) {
            const error = new Error(`Product with ID ${id} cannot be found`);
            error.status = 404;
            throw error;
        } 
        res.json(product);
    } catch (error) {
        next(error);
    }
};
const updateProducts = ((req, res, next) => {
    const { id, color, price } = req.body;
    try{
        if (id === undefined){
            throw new Error('Product ID is required.')
        }
        const productIndex = productDB.findIndex((product) => product.id === id)
        if (productIndex === -1){
            const error = new Error('Product cannot be found')
            error.status = 404
            throw error
        }
        if (color !== undefined) {
            productDB[productIndex].color = color;
        }
        if (price !== undefined) {
            productDB[productIndex].price = price;
        }
        res.status(200).json(productDB[productIndex]);
    } catch (error){
        next (error)
    }
})

const deleteProducts = (req, res, next) => {
    try {
        const { id } = req.body
        if (id === undefined) {
            throw new Error('Product ID is required.')
        }
        const productIndex = productDB.findIndex((product) => product.id === id);
        if (productIndex === -1) {
            const error = new Error('Product cannot be found')
            error.status = 404
            throw error
        }
        productDB.splice(productIndex, 1)
        return res.status(200).json(productDB)
    } catch (error) {
        next (error)
    }
}


module.exports = { getProducts, getProductsById, updateProducts, deleteProducts }
