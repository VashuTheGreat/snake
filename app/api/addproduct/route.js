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











































import { NextResponse } from "next/server";
import product from "../../../lib/product";
import connectDB from "../../../lib/mongodb";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        console.log("Received body:", body); // 🔥 Debugging Line

        if (!Array.isArray(body)) {
            return NextResponse.json({ error: "Invalid data format", received: body }, { status: 400 });
        }

        const savedProducts = await product.insertMany(body);
        return NextResponse.json({ message: "Products added successfully", savedProducts }, { status: 200 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
