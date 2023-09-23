require('../connection')
const Product = require('../models/product')

async function updateProduct(){
    const user = await Product.updateOne({name: 'Guitar'}, {price: 342});
    console.log(user)
}

updateProduct();