// // const mongoose = require('mongoose');
// // const ProductSchema = mongoose.model('Product', {
// //     title: { type: String, required: true },
// //   slug: { type: String, required: true, unique: true },
// //   desc: { type: String, required: true },
// //   category: { type: String, required: true },
// //   size: { type: String },
// //   color: { type: String },
// //   price: { type: Number, required: true },
// //   availableQty: { type: Number, required: true },
// //     img: { type: String, required: true },
// // },{timeStamps: true});
// // mongoose.models = {}
// // export default mongoose.model('Product', ProductSchema);












// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   desc: { type: String, required: true },
//   category: { type: String, required: true },
//   size: { type: String },
//   color: { type: String },
//   price: { type: Number, required: true },
//   availableQty: { type: Number, required: true },
//   img: { type: String, required: true },
// }, { timestamps: true }); // Fixed 'timestamps'

// export default mongoose.models.Product || mongoose.model('Product', ProductSchema);









































import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title: String,
    slug: String,
    desc: String,
    category: String,
    size: String,
    color: String,
    price: Number,
    availableQty: Number,
    img: String
});

// ✅ **Check if model already exists, to avoid redefining**
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
