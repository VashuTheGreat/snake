// "use client";

// import { useState } from "react";

// export default function AddProductPage() {
//     const addProduct = async () => {
//         const response = await fetch("/api/addproduct", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify([
//                 {
//                     title: "Sample Product",
//                     slug: "sample-product",
//                     desc: "This is a sample description",
//                     category: "Category",
//                     size: "M",
//                     color: "Red",
//                     price: 999,
//                     availableQty: 10,
//                     img: "image_url",
//                 },
//             ]),
//         });

//         const data = await response.json();
//         console.log("Response:", data);
//     };

//     return (
//         <div>
//             <h1>Add Product</h1>
//             <button onClick={addProduct} className="px-4 py-2 bg-blue-500 text-white rounded">
//                 Add Product
//             </button>
//         </div>
//     );
// }









































"use client";
import { useState } from "react";

const AdminPage = () => {
  const [password, setPassword] = useState('');
  const [product, setProduct] = useState({
    title: '',
    slug: '',
    desc: '',
    category: '',
    size: '',
    color: '',
    price: '',
    availableQty: '',
    img: ''
  });
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/addproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-password": password, // Send password as a header
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        // Attempt to parse the response as JSON
        const data = await response.json().catch((error) => {
          console.error("Failed to parse JSON:", error);
          return null; // In case the response body isn't valid JSON
        });

        if (data) {
          console.log("Success:", data);
          setIsSubmitted(true);
          setError('');
          setProduct({
            title: '',
            slug: '',
            desc: '',
            category: '',
            size: '',
            color: '',
            price: '',
            availableQty: '',
            img: ''
          });
        } else {
          setError("Received empty or invalid data.");
          setIsSubmitted(false);
        }
      } else {
        // Handle non-OK responses, such as 400 or 500 errors
        const errorData = await response.json().catch(() => {
          return { error: "Failed to fetch valid data from the server." };
        });
        setError(errorData.error || "An error occurred");
        setIsSubmitted(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("There was a problem with the request.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-xl shadow-lg">
      <h1 className="text-3xl text-center font-semibold mb-6">Admin - Add Product</h1>
      {isSubmitted && <p className="text-green-500 text-center mb-4">Product added successfully!</p>}

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Password Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Title Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Slug Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Slug:</label>
          <input
            type="text"
            name="slug"
            value={product.slug}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Description:</label>
          <textarea
            name="desc"
            value={product.desc}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Category:</label>
          <select
            name="category"
            value={product.category}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Caps">Caps</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Hoodies">Hoodies</option>
            <option value="Programming">Programming</option>
            <option value="Fitness">Fitness</option>
            <option value="Polo T-Shirts">Polo T-Shirts</option>
            <option value="Pants">Pants</option>
            <option value="LifeStyle">LifeStyle</option>
            <option value="Mugs">Mugs</option>
            <option value="Mouse Pads">Mouse Pads</option>
            <option value="Gamming">Gamming</option>
            <option value="Customized">Customized</option>
            <option value="Combo">Combo</option>
          </select>
        </div>

        {/* Size Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Size:</label>
          <input
            type="text"
            name="size"
            value={product.size}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Color Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Color:</label>
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Available Quantity Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Available Quantity:</label>
          <input
            type="number"
            name="availableQty"
            value={product.availableQty}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL Input */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-700">Image URL:</label>
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleInputChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
};

export default AdminPage;
