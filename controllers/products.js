const Product = require('../model/product.js');

const getAllProducts = async(req, res) => {
    const { company, name, feature } = req.query;
    const queryObj = {};

    if (company) queryObj.company = company;
    if (feature) queryObj.feature = feature;
    if (name) queryObj.name = { $regex: name, $options: "i" };

    const productData = await Product.find(queryObj);

    res.status(200).json(productData);
}

const getAllProductsTesting = async(req, res) => {
    const productData = await Product.find(req.query);
    res.status(200).json({ productData });
}

module.exports = { getAllProducts, getAllProductsTesting }