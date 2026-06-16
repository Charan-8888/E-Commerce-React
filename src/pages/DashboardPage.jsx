function DashboardPage({ user, orders, cart }) {
  const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);
  const totalItems = orders.reduce((sum, o) => sum + o.items.reduce((s, i) => s + i.qty, 0), 0);
 
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "0 24px" }}>
      {/* Profile card */}
      <div style={{ background: "#1e3a5f", borderRadius: 16, padding: "28px 32px", color: "#fff", display: "flex", alignItems: "center", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 700 }}>
          {user.name[0]}
        </div>
        <div>
          <h2 style={{ margin: 0, fontSize: 22 }}>Hello, {user.name}! 👋</h2>
          <p style={{ margin: "4px 0 0", opacity: 0.75, fontSize: 14 }}>{user.email}</p>
        </div>
      </div>
 
      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 28 }}>
        {[
          { label: "Total Orders", value: orders.length, icon: "📦" },
          { label: "Total Spent", value: `₹${totalSpent}`, icon: "💸" },
          { label: "Items Bought", value: totalItems, icon: "🛍️" },
          { label: "Cart Items", value: cart.reduce((s, i) => s + i.qty, 0), icon: "🛒" },
        ].map(stat => (
          <div key={stat.label} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 14, padding: "20px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 32 }}>{stat.icon}</div>
            <div style={{ fontSize: 24, fontWeight: 700, color: "#1d4ed8", marginTop: 6 }}>{stat.value}</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>
 
      {/* Recent orders preview */}
      {orders.length > 0 && (
        <>
          <h3 style={{ color: "#1e3a5f", marginBottom: 14 }}>Recent Orders</h3>
          {orders.slice(0, 3).map(order => (
            <div key={order.id} style={{ display: "flex", justifyContent: "space-between", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "14px 16px", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
              <div>
                <span style={{ fontWeight: 600, color: "#1e3a5f" }}>{order.id}</span>
                <span style={{ color: "#6b7280", fontSize: 13, marginLeft: 10 }}>{order.date}</span>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <span style={{ fontWeight: 700, color: "#1d4ed8" }}>₹{order.total}</span>
                <span style={{ background: "#d1fae5", color: "#065f46", padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>✓ {order.status}</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default DashboardPage;