import { useState } from "react";
import { DEMO_USER } from "../data/users";
import {
  inputStyle,
  labelStyle,
  btnStyle
} from "../styles/commonStyles";

function HistoryPage({ orders, setPage }) {
  if (orders.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <div style={{ fontSize: 64 }}>📜</div><br></br>
        <h2 style={{ color: "#1e3a5f" }}>No orders yet</h2>
        <button onClick={() => setPage("home")} style={btnStyle("#3b82f6")}>Start Shopping</button>
      </div>
    );
  }
 
  return (
    <div style={{ maxWidth: 750, margin: "40px auto", padding: "0 24px" }}>
      <h2 style={{ color: "#1e3a5f", marginBottom: 24 }}>📜 Order History</h2>
      {orders.map(order => (
        <div key={order.id} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 20, marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
            <div>
              <span style={{ fontWeight: 700, color: "#1e3a5f" }}>{order.id}</span>
              <span style={{ color: "#6b7280", fontSize: 13, marginLeft: 12 }}>{order.date}</span>
            </div>
            <span style={{ background: "#d1fae5", color: "#065f46", padding: "3px 12px", borderRadius: 20, fontSize: 13, fontWeight: 600 }}>
              ✓ {order.status}
            </span>
          </div>
          {/* Items */}
          {order.items.map(i => (
            <div key={i.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", borderTop: "1px solid #f3f4f6" }}>
              <span style={{ fontSize: 24 }}>{i.image}</span>
              <span style={{ flex: 1, fontSize: 14, color: "#374151" }}>{i.name} × {i.qty}</span>
              <span style={{ fontWeight: 600, color: "#1d4ed8", fontSize: 14 }}>₹{i.price * i.qty}</span>
            </div>
          ))}
          <div style={{ textAlign: "right", fontWeight: 700, color: "#1e3a5f", marginTop: 10, fontSize: 16 }}>Total: ₹{order.total}</div>
        </div>
      ))}
    </div>
  );
}

export default HistoryPage;