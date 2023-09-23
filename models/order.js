const {Schema, model} = require('mongoose');

const orderSchema = new Schema({
    client:{
        type: String,
        unique: true, //per no tenir dos iguals
        required: true,
    },
    //product: [{ type: Schema.Types.ObjectId, ref: 'product' }],
    product: String,
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('order', orderSchema);




