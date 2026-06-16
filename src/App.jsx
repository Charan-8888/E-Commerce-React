import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import HistoryPage from "./pages/HistoryPage";
import DashboardPage from "./pages/DashboardPage";

import { PRODUCTS } from "./data/product";

export default function App() {
  const [page, setPage] = useState("home");        // which page to show
  const [user, setUser] = useState(null);           // logged-in user
  const [cart, setCart] = useState([]);             // cart items
  const [orders, setOrders] = useState([]);         // order history
  const [search, setSearch] = useState("");         // search text
  const [selectedProduct, setSelectedProduct] = useState(null); // product detail
 
  // Add item to cart (merge if already exists)
  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }
 
  // Render correct page
  function renderPage() {
    switch (page) {
      case "home":     return <HomePage products={PRODUCTS} addToCart={addToCart} setPage={setPage} setSelectedProduct={setSelectedProduct} search={search} />;
      case "product":  return <ProductPage product={selectedProduct} addToCart={addToCart} setPage={setPage} />;
      case "cart":     return <CartPage cart={cart} setCart={setCart} setPage={setPage} user={user} />;
      case "login":    return <LoginPage setUser={setUser} setPage={setPage} />;
      case "register": return <RegisterPage setUser={setUser} setPage={setPage} />;
      case "payment":  return <PaymentPage cart={cart} setCart={setCart} setPage={setPage} setOrders={setOrders} />;
      case "history":  return <HistoryPage orders={orders} setPage={setPage} />;
      case "dashboard":return <DashboardPage user={user} orders={orders} cart={cart} />;
      default:         return <HomePage products={PRODUCTS} addToCart={addToCart} setPage={setPage} setSelectedProduct={setSelectedProduct} search={search} />;
    }
  }
 
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh" }}>
      <Navbar page={page} setPage={setPage} cart={cart} user={user} setUser={setUser} search={search} setSearch={setSearch} />
      <main>{renderPage()}</main>
 
      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "32px 16px", color: "#9ca3af", fontSize: 13, marginTop: 40, borderTop: "1px solid #e5e7eb" }}>
        © 2025 ShopEasy — Built with React · Simple E-Commerce Project
      </footer>
    </div>
  );
}