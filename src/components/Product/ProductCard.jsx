import { useState } from "react";
import Stars from "./Stars";

function ProductCard({ product, addToCart, setPage, setSelectedProduct }) {
  const [added, setAdded] = useState(false);
 
  function handleAdd() {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }
 
  return (
    <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden", transition: "box-shadow 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)"}
    >
      {/* Product image / emoji */}
      <div onClick={() => { setSelectedProduct(product); setPage("product"); }} style={{ background: "#f0f4ff", textAlign: "center", fontSize: 70, padding: "28px 0", cursor: "pointer" }}>
        {product.image}
      </div>
 
      <div style={{ padding: "14px 16px" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#6b7280" }}>{product.category}</p>
        <h3 onClick={() => { setSelectedProduct(product); setPage("product"); }} style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 600, cursor: "pointer", color: "#1e3a5f" }}>
          {product.name}
        </h3>
        <Stars rating={product.rating} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
          <span style={{ fontSize: 20, fontWeight: 700, color: "#1d4ed8" }}>₹{product.price}</span>
          <button onClick={handleAdd} style={{ background: added ? "#10b981" : "#3b82f6", color: "#fff", border: "none", padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 500, transition: "background 0.2s" }}>
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;