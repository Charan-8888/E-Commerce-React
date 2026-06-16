import NavBtn from "./NavBtn";

function Navbar({ page, setPage, cart, user, setUser, search, setSearch }) {
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);
 
  return (
    <nav style={{ background: "#1e3a5f", padding: "12px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", position: "sticky", top: 0, zIndex: 100 }}>
      {/* Logo */}
      <span onClick={() => setPage("home")} style={{ color: "#fff", fontWeight: 700, fontSize: 22, cursor: "pointer", letterSpacing: -0.5 }}>
        🛍️ ShopEasy
      </span>
 
      {/* Search bar */}
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => e.key === "Enter" && setPage("home")}
        placeholder="Search products..."
        style={{ flex: 1, minWidth: 180, padding: "8px 14px", borderRadius: 8, border: "none", fontSize: 14, outline: "none" }}
      />
 
      {/* Nav links */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <NavBtn label="🏠 Home" onClick={() => setPage("home")} active={page === "home"} />
        <NavBtn label={`🛒 Cart ${cartCount > 0 ? `(${cartCount})` : ""}`} onClick={() => setPage("cart")} active={page === "cart"} />
        {user ? (
          <>
            <NavBtn label="📊 Dashboard" onClick={() => setPage("dashboard")} active={page === "dashboard"} />
            <NavBtn label="📜 History" onClick={() => setPage("history")} active={page === "history"} />
            <NavBtn label={`👤 ${user.name}`} onClick={() => setPage("dashboard")} />
            <button onClick={() => { setUser(null); setPage("home"); }} style={{ background: "#ef4444", color: "#fff", border: "none", padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>
              Logout
            </button>
          </>
        ) : (
          <NavBtn label="🔑 Login" onClick={() => setPage("login")} active={page === "login"} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;