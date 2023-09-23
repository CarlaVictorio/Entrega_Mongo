require('../connection')
const Product = require('../models/product')

const createProduct = async () => { 
    const product1 = new Product ({
        name: 'Phone',
        price: 800,
        description: 'IPhone X'
    })
    await product1.save();

    const product2 = new Product ({
        name: 'Laptop',
        price: 900,
        description: 'Lenovo'
    })
    await product2.save();
}
createProduct();
