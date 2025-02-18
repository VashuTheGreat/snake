
// "use client"
// import { useState } from 'react';
// import Link from 'next/link';
// const CheckoutForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 className='font-sans text-2xl font-bold text-center align-middle justify-center p-5'>Checkout Form</h2>

//       <form onSubmit={handleSubmit} style={styles.form}>
//         {/* Name and Email Side by Side */}
//         <div style={styles.row}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//         </div>

//         {/* Address (Full Width) */}
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             style={{ ...styles.input, width: '100%' }}
//             required
//           />
//         </div>

//         {/* Phone Number and City Side by Side */}
//         <div style={styles.row}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Phone Number:</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>City:</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//         </div>

//         {/* State and Pincode Side by Side */}
//         <div style={styles.row}>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>State:</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//           <div style={styles.formGroup}>
//             <label style={styles.label}>Pincode:</label>
//             <input
//               type="text"
//               name="pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               style={styles.input}
//               required
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <Link href={"/orderPlaced"}><button  type="submit" style={styles.button}>
//           Submit
//         </button></Link>
//       </form>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: 'Arial, sans-serif',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//   },
//   row: {
//     display: 'flex',
//     gap: '20px',
//   },
//   formGroup: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '5px',
//   },
//   label: {
//     fontWeight: 'bold',
//   },
//   input: {
//     padding: '8px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//   },
//   button: {
//     padding: '10px 20px',
//     backgroundColor: '#0070f3',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     alignSelf: 'flex-start',
//   },
// };

// export default CheckoutForm;










































"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("checkoutForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsEditing(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("checkoutForm", JSON.stringify(formData));
    setIsEditing(true);
  };

  const handleDelete = () => {
    localStorage.removeItem("checkoutForm");
    setFormData({ name: "", email: "", phone: "", address: "", city: "", state: "", pincode: "" });
    setIsEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto p-5 font-sans">
      <h2 className="text-2xl font-bold text-center mb-5">Checkout Form</h2>

      {isEditing ? (
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Overview</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
          <button
            onClick={() => setIsEditing(false)}
            className="mt-1 px-1 py-1 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="mt-1 ml-1 px-1 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>

        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" required />
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border rounded" required />
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full p-2 border rounded" required />
          <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full p-2 border rounded" required />
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="w-full p-2 border rounded" required />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
        </form>
      )}

      {isEditing&& <Link href='/orderPlaced' className="text-center justify-center align-middle flex"><button className="flex ml-4 text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Continue <span className="flex text-center align-middle justify-center ml-2"> <ArrowRight size={25} /></span> </button></Link>
    }
    </div>
  );
};

export default CheckoutForm;

























