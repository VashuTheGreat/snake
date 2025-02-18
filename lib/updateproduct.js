import product from "./product";
import connectDB from "@lib/mongodb";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
     let p=await product.findByIdAndUpdate({_id:req.body[i]._id},req.body[i])
    }
    res.status(200).json({success:"successfull" })
    }
    else {
        res.status(400).json({ error: "This method is not allowed" })
    }
   
}
export default connectDB(handler);