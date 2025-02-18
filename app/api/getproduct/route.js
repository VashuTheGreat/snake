// // import product from "../../lib/product";
// // import connectDB from "../../lib/mongodb";
// // import { mongo } from "mongoose";
// // import react from "react";

// // const handler = async (req, res) => {
// //         let p = await product.find();
// //         res.status(200).json({ p })
    
// // }
// // export default connectDB(handler);















import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Product from "../../../lib/product";

export async function GET() {
    try {
        await connectDB(); // ✅ MongoDB se connect karo
        const products = await Product.find(); // ✅ Sare products fetch karo
        return NextResponse.json({ products }, { status: 200 }); // ✅ Response bhejo
    } catch (error) {
        return NextResponse.json({ error: "Database Error", details: error.message }, { status: 500 });
    }
}


