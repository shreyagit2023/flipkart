import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

import NotFound from "../NotFound";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCT FROM BACKEND
  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  // ADD TO CART
  const handleToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) => item._id === product._id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
  };

  if (loading) return <p>Loading...</p>;
  if (!product) return <NotFound />;

  return (
    <>
      <Header />
      <Navbar />

      <div className="product-page">
        <div className="product-left">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-right">
          <h1 className="product-title">{product.title}</h1>

          <p className="product-price">₹{product.price}</p>

          <p className="product-desc">
            {product.description || "High-quality product at best price."}
          </p>

          <button onClick={handleToCart} className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
