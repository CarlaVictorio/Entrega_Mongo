require('../connection')
const order = require('../models/order')

async function updateFunction(){
    const orderUpdated = await order.updateOne({client: 'Carla'}, {product: 'Piano'});
    console.log(orderUpdated)
}
updateFunction();