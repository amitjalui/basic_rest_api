const Product = require('../model/product.js');

const getAllProducts = async(req, res) => {
    const productData = await Product.find(req.query);
    res.status(200).json({ productData });
}

const getAllProductsTesting = async(req, res) => {
    const productData = await Product.find(req.query);
    res.status(200).json({ productData });
}

module.exports = { getAllProducts, getAllProductsTesting }