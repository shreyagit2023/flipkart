import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TopDeals.css";

export default function TopDeals() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setDeals(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="top-deals-container">
      <h2 className="topdeals-title">Top Deals</h2>

      <div className="top-deals-row">
        {deals.map((item) => (
          <Link
            key={item._id}
            to={`/product/${item._id}`}
            className="deal-link"
          >
            <div className="deal-card">
              <img src={item.image} alt={item.title} />
              <p className="deal-title">{item.title}</p>
              <p className="deal-price">₹{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
