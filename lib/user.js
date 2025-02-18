const mongoose = require('mongoose');
const userSchema = mongoose.model('Product', {
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   phone: { type: String, required: true },
},{timeStamps: true});
mongoose.models = {}
export default mongoose.model('User', userSchema);