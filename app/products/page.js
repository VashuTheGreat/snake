"use client"; // 👈 Force client-side rendering

import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        console.log("Fetched products:", data);

        if (Array.isArray(data)) {
          setProducts(data); // Ensure `data` is an array
        } else {
          console.error("Invalid data format:", data);
          setProducts([]); // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500 font-semibold mt-2">₹{product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center col-span-3">No products found</p>
      )}
    </div>
  );
};

export default ProductsPage;
