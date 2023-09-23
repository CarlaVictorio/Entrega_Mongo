require('../connection')
const Product = require('../models/product')

async function deleteFunction(){

    const result = await Product.findOneAndDelete({name: 'Guitar'}); // devuelve lo que elimina
    console.log(result)

}
deleteFunction()