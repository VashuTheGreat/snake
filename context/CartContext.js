// "use client";
// import { set } from "mongoose";
// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});
//   const [subTotal, setSubTotal] = useState(0);
//   // const [image,setimage]=useState("https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg");
//   const [image, setImage] = useState(() => {
//     return typeof window !== "undefined" ? localStorage.getItem("image") || "https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg" : "";
//   });
//     useEffect(() => {
//     try {
//       if (localStorage.getItem("cart")) {
//         setCart(JSON.parse(localStorage.getItem("cart")));
//       }
//     } catch (error) {
//       console.log(error);
//       localStorage.clear();
//     }

  
//   }, []);

//   const saveCart = (myCart) => {
//     localStorage.setItem("cart", JSON.stringify(myCart));
//     let subt = Object.values(myCart).reduce((acc, item) => acc + item.price * item.qty, 0);
//     setSubTotal(subt);
//   };

//   const addToCart = (itemCode, qty, price, name, size, variant) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty += qty;
//     } else {
//       newCart[itemCode] = { qty, price, name, size, variant };
//     }
//     setCart(newCart);
//     console.log(newCart);
//     saveCart(newCart);
//   };

//   const removeFromCart = (itemCode, qty) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty -= qty;
//       if (newCart[itemCode].qty <= 0) {
//         delete newCart[itemCode];
//       }
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const clearCart = () => {
//     setCart({});
//     saveCart({});
//   };
//   const chimage = (newImage) => {
//     setImage(newImage);
//     localStorage.setItem("image", newImage); // Store image in localStorage
//   };
 
 

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, subTotal,chimage,image, }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };































































// "use client";
// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});
//   const [subTotal, setSubTotal] = useState(0);
//   const [image, setImage] = useState(null);
//   const [sizes, setSizes] = useState("L M XL");
//   const [variants, setVariants] = useState("Black");
//   const [titlev, settitle] = useState("Coding T-shirt AjayHerosStyle");
//   const [pricev, setprice] = useState(1000);
//   const [product, setproduct] = useState({ name: "T-Shirt", price: 1000, size: "L" });
//   useEffect(() => {
//     try {
//       if (localStorage.getItem("cart")) {
//         setCart(JSON.parse(localStorage.getItem("cart")));
//       }

//       // ✅ Fixing Empty String Issue
//       const storedImage = localStorage.getItem("image");
//       if (storedImage) {
//         setImage(storedImage);
//       } else {
//         setImage("https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg"); // Default image
//       }

//     } catch (error) {
//       console.log(error);
//       localStorage.clear();
//     }
//   }, []);

//   const saveCart = (myCart) => {
//     localStorage.setItem("cart", JSON.stringify(myCart));
//     let subt = Object.values(myCart).reduce((acc, item) => acc + item.price * item.qty, 0);
//     setSubTotal(subt);
//   };

//   const addToCart = (itemCode, qty, price, name, size, variant) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty += qty;
//     } else {
//       newCart[itemCode] = { qty, price, name, size, variant };
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const removeFromCart = (itemCode, qty) => {
//     let newCart = { ...cart };
//     if (itemCode in newCart) {
//       newCart[itemCode].qty -= qty;
//       if (newCart[itemCode].qty <= 0) {
//         delete newCart[itemCode];
//       }
//     }
//     setCart(newCart);
//     saveCart(newCart);
//   };

//   const clearCart = () => {
//     setCart({});
//     saveCart({});
//   };

//   const chimage = (newImage) => {
//     setImage(newImage);
//     localStorage.setItem("image", newImage); // ✅ Old image overwrite होगी
//   };
//   const sizesetter = (newSizes) => {
//     setSizes(newSizes);
//     localStorage.setItem("sizes",newSizes); // ✅ Old image overwrite होगी
//   };
//   const setter = (newVariants) => {
//     setVariants(newVariants);
//     localStorage.setItem("variants",newVariants); // ✅ Old image overwrite होगी
//   };
//   const titleset = (title4) => {
//     settitle(title4);
//     localStorage.setItem("title",title4); // ✅ Old image overwrite होगी
//   };
//   const priceset = (price) => {
//     setprice(price);
//     localStorage.setItem("price",price); // ✅ Old image overwrite होगी
//   };
//   const productset = (p) => {
//     setproduct(p);
//     localStorage.setItem("product", JSON.stringify(p)); // Convert object to string
//   };
  

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, subTotal, chimage, image,sizesetter,sizes,variants,setter,titlev ,titleset,pricev,priceset,productset,product }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };






















































"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [image, setImage] = useState(null);
  const [sizes, setSizes] = useState("L M XL");
  const [variants, setVariants] = useState("Black");
  const [titlev, setTitle] = useState("Coding T-shirt AjayHerosStyle");
  const [pricev, setPrice] = useState(1000);
  const [product, setProduct] = useState({ name: "T-Shirt", price: 1000, size: "L" });

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }

      setImage(localStorage.getItem("image") || "https://m.media-amazon.com/images/I/713n+TxyfCL._SX569_.jpg");
      setSizes(localStorage.getItem("sizes") || "L M XL");
      setVariants(localStorage.getItem("variants") || "Black");
      setTitle(localStorage.getItem("title") || "Coding T-shirt AjayHerosStyle");
      setPrice(localStorage.getItem("price") ? Number(localStorage.getItem("price")) : 1000);

      const storedProduct = localStorage.getItem("product");
      if (storedProduct) {
        setProduct(JSON.parse(storedProduct));
      }

    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    setSubTotal(Object.values(myCart).reduce((acc, item) => acc + item.price * item.qty, 0));
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    if (newCart[itemCode]) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty) => {
    let newCart = { ...cart };
    if (newCart[itemCode]) {
      newCart[itemCode].qty -= qty;
      if (newCart[itemCode].qty <= 0) {
        delete newCart[itemCode];
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const chImage = (newImage) => {
    setImage(newImage);
    localStorage.setItem("image", newImage);
  };

  const setSize = (newSizes) => {
    setSizes(newSizes);
    localStorage.setItem("sizes", newSizes);
  };

  const setVariant = (newVariants) => {
    setVariants(newVariants);
    localStorage.setItem("variants", newVariants);
  };

  const setTitlev = (newTitle) => {
    setTitle(newTitle);
    localStorage.setItem("title", newTitle);
  };

  const setPricev = (newPrice) => {
    setPrice(newPrice);
    localStorage.setItem("price", newPrice);
  };

  const setProductv = (newProduct) => {
    setProduct(newProduct);
    localStorage.setItem("product", JSON.stringify(newProduct));
  };

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeFromCart, clearCart, subTotal, 
      chImage, image, setSize, sizes, setVariant, variants, 
      titlev, setTitlev, pricev, setPricev, setProductv, product 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
