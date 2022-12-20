const Product = require('../model/product.js');

const getAllProducts = async(req, res) => {
    const { company, name, feature, sort, select } = req.query;
    const queryObj = {};
    
    if (company) queryObj.company = company;
    if (feature) queryObj.feature = feature;
    if (name) queryObj.name = { $regex: name, $options: "i" };

    let apiData = Product.find(queryObj);

    // sort functionality
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // select functionality
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // pagination
    let page = Number(req.query.page);
    let limit = Number(req.query.limit);
    let skip = (page - 1) * limit;
    if (page || limit) {
        apiData = apiData.skip(skip).limit(limit);
    }

    const productsData = await apiData;
    res.status(200).json({productsData, nbHits: productsData.length});
}

const getAllProductsTesting = async(req, res) => {
    const productData = await Product.find(req.query).select("name company");
    res.status(200).json({ productData });
}

module.exports = { getAllProducts, getAllProductsTesting }