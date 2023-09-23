require('../connection')
const product = require('../models/product')

async function findFunction(){

    const products = await product.find()
    console.log(products)
    //const product1 = await product.findOne({name: 'Guitar'});
    //console.log(product1)
}
findFunction()
 
