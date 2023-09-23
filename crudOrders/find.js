require('../connection')

const Order = require('../models/order')

async function findFunction(){

    const orders = await Order.find()
    console.log(orders)
    //const order1 = await Order.findOne({client: 'Maria'});
    //console.log(order1)
}
findFunction()

