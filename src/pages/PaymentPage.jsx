function PaymentPage({ cart, setCart, setPage, setOrders }) {
  const [method, setMethod] = useState("card");
  const [cardNum, setCardNum] = useState("");
  const [name, setName] = useState("");
  const [paid, setPaid] = useState(false);
 
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
 
  function handlePay() {
    // Save order to history
    const order = {
      id: "ORD" + Date.now(),
      date: new Date().toLocaleDateString("en-IN"),
      items: [...cart],
      total,
      status: "Delivered",
      method,
    };
    setOrders(prev => [order, ...prev]);
    setCart([]);
    setPaid(true);
  }
 
  if (paid) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <div style={{ fontSize: 64 }}>✅</div>
        <h2 style={{ color: "#10b981" }}>Payment Successful!</h2>
        <p style={{ color: "#6b7280" }}>Your order has been placed.</p>
        <button onClick={() => setPage("history")} style={btnStyle("#3b82f6")}>View Order History</button>
        <button onClick={() => setPage("home")} style={{ ...btnStyle("#6b7280"), marginLeft: 12 }}>Continue Shopping</button>
      </div>
    );
  }
 
  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: "0 24px" }}>
      <h2 style={{ color: "#1e3a5f", marginBottom: 8 }}>💳 Payment</h2>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>Total: <strong style={{ color: "#1d4ed8" }}>₹{total}</strong></p>
 
      {/* Payment method selector */}
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {["card", "upi", "cod"].map(m => (
          <button key={m} onClick={() => setMethod(m)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, border: "2px solid", borderColor: method === m ? "#3b82f6" : "#e5e7eb", background: method === m ? "#eff6ff" : "#fff", color: method === m ? "#1d4ed8" : "#374151", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>
            {m === "card" ? "💳 Card" : m === "upi" ? "📱 UPI" : "💵 COD"}
          </button>
        ))}
      </div>
 
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: 24 }}>
        {method === "card" && (
          <>
            <label style={labelStyle}>Cardholder Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name on card" style={inputStyle} />
            <label style={labelStyle}>Card Number</label>
            <input value={cardNum} onChange={e => setCardNum(e.target.value.replace(/\D/g, "").slice(0, 16))} placeholder="1234 5678 9012 3456" style={inputStyle} />
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>Expiry</label>
                <input placeholder="MM/YY" style={inputStyle} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>CVV</label>
                <input placeholder="•••" type="password" style={inputStyle} />
              </div>
            </div>
          </>
        )}
        {method === "upi" && (
          <>
            <label style={labelStyle}>UPI ID</label>
            <input placeholder="yourname@upi" style={inputStyle} />
          </>
        )}
        {method === "cod" && (
          <p style={{ color: "#10b981", fontWeight: 500, textAlign: "center" }}>Pay ₹{total} when your order arrives 📦</p>
        )}
      </div>
 
      <button onClick={handlePay} style={{ ...btnStyle("#10b981"), width: "100%", fontSize: 16, marginTop: 20 }}>
        ✓ Pay ₹{total}
      </button>
    </div>
  );
}

export default PaymentPage;