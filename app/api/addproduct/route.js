// import product from "../../../lib/product";
// import connectDB from "../../../lib/mongodb";

// const handler = async (req, res) => {
//     try {
//         await connectDB();

//         if (req.method === 'POST') {
//             const products = req.body;

//             if (!Array.isArray(products)) {
//                 return res.status(400).json({ error: "Invalid data format" });
//             }

//             const savedProducts = await product.insertMany(products);
//             return res.status(200).json({ message: "Products added successfully", savedProducts });
//         }

//         return res.status(400).json({ error: "This method is not allowed" });
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// };

// export default handler;











































// import { NextResponse } from "next/server";
// import product from "../../../lib/product";
// import connectDB from "../../../lib/mongodb";

// export async function POST(req) {
//     try {
//         await connectDB();
//         const body = await req.json();
//         console.log("Received body:", body); // 🔥 Debugging Line

//         if (!Array.isArray(body)) {
//             return NextResponse.json({ error: "Invalid data format", received: body }, { status: 400 });
//         }

//         const savedProducts = await product.insertMany(body);
//         return NextResponse.json({ message: "Products added successfully", savedProducts }, { status: 200 });
//     } catch (error) {
//         console.error("Error:", error);
//         return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//     }
// }




















import { NextResponse } from "next/server";
import product from "../../../lib/product"; // Your product model
import connectDB from "../../../lib/mongodb"; // Your MongoDB connection setup

const PASSWORD = process.env.PASSWORD || "yourSecretPassword"; // Use your actual password

export async function POST(req) {
    try {
        const password = req.headers.get("x-password");

        // Log password for debugging
        // console.log("Received password:", password);

        // Check if the password is correct
        if (password !== PASSWORD) {
            return NextResponse.json({ error: "Unauthorized: Incorrect password" }, { status: 401 });
        }

        // Connect to the database
        await connectDB();
        console.log("Connected to MongoDB"); // Log successful DB connection

        const body = await req.json();
        // console.log("Received product data:", body); // For debugging

        // Check for missing data
        if (!body.title || !body.slug || !body.desc || !body.category || !body.size || !body.color || !body.price || !body.availableQty || !body.img) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Create a new product instance
        const newProduct = new product(body);

        // Save the product to the database
        await newProduct.save();
        console.log("Product saved:", newProduct);

        // Return success response
        return NextResponse.json({ message: "Product added successfully", newProduct }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error", message: error.message }, { status: 500 });
    }
}
