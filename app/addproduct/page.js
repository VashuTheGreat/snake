"use client";

import { useState } from "react";

export default function AddProductPage() {
    const addProduct = async () => {
        const response = await fetch("/api/addproduct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify([
                {
                    title: "Sample Product",
                    slug: "sample-product",
                    desc: "This is a sample description",
                    category: "Category",
                    size: "M",
                    color: "Red",
                    price: 999,
                    availableQty: 10,
                    img: "image_url",
                },
            ]),
        });

        const data = await response.json();
        console.log("Response:", data);
    };

    return (
        <div>
            <h1>Add Product</h1>
            <button onClick={addProduct} className="px-4 py-2 bg-blue-500 text-white rounded">
                Add Product
            </button>
        </div>
    );
}
