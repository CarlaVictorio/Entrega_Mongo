require('./connection')
const product = require('./models/product')
const order = require('./models/order')

/*
const myProduct = new product({
    name: 'Guitar',
    price: 300,
    description: 'Fender Acoustic Guitar'
});

myProduct.save();
console.log(myProduct);

const myOrder = new order({
    client: 'Carla',
    product: 'Guitar'
});

myOrder.save();
console.log(myOrder);
*/
async function findFunction(){

//const order1 = await order.findOne({ client: 'Carla' }).populate('product').exec();
const order1 = await order.findOne({ client: 'Carla' });
console.log(order1);
}
findFunction();

