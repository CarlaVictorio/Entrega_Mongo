require('../connection')
const Order = require('../models/order')

const createOrder = async () => { 
    const order1 = new Order ({
        client: 'Maria',
        product: 'Guitar'
    })
    await order1.save();

    const order2 = new Order ({
        client: 'Joan',
        product: 'Phone'
    })
    await order2.save();
}
createOrder();
