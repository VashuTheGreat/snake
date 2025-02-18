import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("CodersStyle"); // Replace with your DB name
    const products = await db.collection("Products").find({}).toArray();

    return NextResponse.json(products, { status: 200 }); // Ensure JSON array
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
