import { useState } from "react";
import ProductCard from "../components/Product/ProductCard";

function HomePage({ products, addToCart, setPage, setSelectedProduct, search }) {
  const [category, setCategory] = useState("All");
 
  // Get unique categories
  const categories = ["All", ...new Set(products.map(p => p.category))];
 
  // Filter by search and category
  const filtered = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });
 
  return (
    <div style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Hero Banner */}
      {!search && (
        <div style={{ background: "linear-gradient(135deg, #1e3a5f, #3b82f6)", borderRadius: 16, padding: "36px 40px", marginBottom: 28, color: "#fff" }}>
          <h1 style={{ margin: 0, fontSize: 30, fontWeight: 700 }}>Welcome to ShopEasy 🛍️</h1>
          <p style={{ margin: "8px 0 0", opacity: 0.85, fontSize: 16 }}>Find the best products at the best prices — fast and simple.</p>
        </div>
      )}
 
      {/* Category filter */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setCategory(cat)} style={{ padding: "6px 16px", borderRadius: 20, border: "1.5px solid", borderColor: category === cat ? "#3b82f6" : "#d1d5db", background: category === cat ? "#eff6ff" : "#fff", color: category === cat ? "#1d4ed8" : "#374151", cursor: "pointer", fontSize: 13, fontWeight: 500 }}>
            {cat}
          </button>
        ))}
      </div>
 
      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60, color: "#6b7280" }}>
          <div style={{ fontSize: 48 }}>🔍</div>
          <p>No products found for "{search}"</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} setPage={setPage} setSelectedProduct={setSelectedProduct} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;