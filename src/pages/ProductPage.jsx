import { useState } from "react";
import Stars from "../components/Product/Stars";

function ProductPage({ product, addToCart, setPage }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
 
  if (!product) { setPage("home"); return null; }
 
  function handleAdd() {
    for (let i = 0; i < qty; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }
 
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 24px" }}>
      <button onClick={() => setPage("home")} style={{ background: "none", border: "1px solid #d1d5db", borderRadius: 8, padding: "6px 14px", cursor: "pointer", marginBottom: 24, color: "#374151" }}>
        ← Back
      </button>
 
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap", background: "#fff", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
        {/* Emoji Image */}
        <div style={{ background: "#f0f4ff", borderRadius: 12, width: 200, height: 200, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 90, flexShrink: 0 }}>
          {product.image}
        </div>
 
        {/* Info */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <p style={{ margin: "0 0 4px", color: "#6b7280", fontSize: 13 }}>{product.category}</p>
          <h2 style={{ margin: "0 0 8px", color: "#1e3a5f", fontSize: 26, fontWeight: 700 }}>{product.name}</h2>
          <Stars rating={product.rating} />
          <p style={{ marginTop: 12, color: "#374151", lineHeight: 1.6 }}>{product.desc}</p>
          <p style={{ color: product.stock > 5 ? "#10b981" : "#f59e0b", fontWeight: 500, fontSize: 14 }}>
            {product.stock > 0 ? `✓ In Stock (${product.stock} left)` : "✗ Out of Stock"}
          </p>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#1d4ed8", marginBottom: 16 }}>₹{product.price}</div>
 
          {/* Quantity */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontSize: 14, color: "#374151" }}>Quantity:</span>
            <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #d1d5db", cursor: "pointer", fontSize: 18, background: "#f9fafb" }}>−</button>
            <span style={{ fontWeight: 600, fontSize: 16, minWidth: 24, textAlign: "center" }}>{qty}</span>
            <button onClick={() => setQty(Math.min(product.stock, qty + 1))} style={{ width: 32, height: 32, borderRadius: 8, border: "1px solid #d1d5db", cursor: "pointer", fontSize: 18, background: "#f9fafb" }}>+</button>
          </div>
 
          <button onClick={handleAdd} style={{ background: added ? "#10b981" : "#3b82f6", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", width: "100%" }}>
            {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;