require('../connection')
const Order = require('../models/order')

async function deleteFunction(){

    const result = await Order.findOneAndDelete({client: 'Maria'}); // devuelve lo que elimina
    console.log(result)
}
deleteFunction()