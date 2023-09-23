const {Schema, model} = require('mongoose');

const productSchema = new Schema ({
    //_id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: true
    },    
    price: {
        type: Number,
        default: 0
    },
    description: String,
})

module.exports = model('product', productSchema);
