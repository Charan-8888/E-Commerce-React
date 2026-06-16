import { btnStyle } from "../styles/commonStyles";
import { qtyBtn } from "../styles/commonStyles";
import { inputStyle } from "../styles/commonStyles";
import { labelStyle } from "../styles/commonStyles";
import { useState } from "react";

function CartPage({ cart, setCart, setPage, user }) {
  // Update quantity
  function changeQty(id, delta) {
    setCart(cart.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  }
 
  // Remove item
  function remove(id) {
    setCart(cart.filter(i => i.id !== id));
  }
 
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
 
  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <div style={{ fontSize: 64 }}>🛒</div><br></br>
        <h2 style={{ color: "#1e3a5f" }}>Your cart is empty</h2>
        <button onClick={() => setPage("home")} style={btnStyle("#3b82f6")}>Browse Products</button>
      </div>
    );
  }
 
  return (
    <div style={{ maxWidth: 750, margin: "40px auto", padding: "0 24px" }}>
      <h2 style={{ color: "#1e3a5f", marginBottom: 24 }}>🛒 Your Cart</h2>
 
      {cart.map(item => (
        <div key={item.id} style={{ display: "flex", alignItems: "center", gap: 16, background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginBottom: 12 }}>
          <div style={{ fontSize: 40 }}>{item.image}</div>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 600, color: "#1e3a5f" }}>{item.name}</p>
            <p style={{ margin: "4px 0 0", color: "#3b82f6", fontWeight: 600 }}>₹{item.price}</p>
          </div>
          {/* Qty controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={() => changeQty(item.id, -1)} style={qtyBtn}>−</button>
            <span style={{ fontWeight: 600, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
            <button onClick={() => changeQty(item.id, +1)} style={qtyBtn}>+</button>
          </div>
          <span style={{ fontWeight: 700, minWidth: 80, textAlign: "right", color: "#1d4ed8" }}>₹{item.price * item.qty}</span>
          <button onClick={() => remove(item.id)} style={{ background: "none", border: "none", color: "#ef4444", fontSize: 20, cursor: "pointer" }}>✕</button>
        </div>
      ))}
 
      {/* Total + Checkout */}
      <div style={{ background: "#f0f4ff", borderRadius: 12, padding: 20, marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, fontWeight: 700, color: "#1e3a5f" }}>
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <button onClick={() => user ? setPage("payment") : setPage("login")} style={{ ...btnStyle("#3b82f6"), width: "100%", marginTop: 16, fontSize: 16 }}>
          {user ? "Proceed to Payment →" : "Login to Checkout"}
        </button>
      </div>
    </div>
  );
}

export default CartPage;