const mongoose = require('mongoose');
const OrderSchema = mongoose.model('Product', {
    userID: { type: String, required: true },
    email: { type: String, required: true },
    products: [{
        productID: { type: String },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true }
    }],
    address: { type: String, required: true },
    status: { type: String, default: "pending", required: true }
},{timeStamps: true});

export default mongoose.model('Order', OrderSchema);