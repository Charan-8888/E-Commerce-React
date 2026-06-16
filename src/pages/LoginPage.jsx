import { useState } from "react";
import { DEMO_USER } from "../data/users";
import {
  inputStyle,
  labelStyle,
  btnStyle
} from "../styles/commonStyles";

function LoginPage({ setUser, setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
 
  function handleLogin() {
    // Simple check against demo user
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setUser(DEMO_USER);
      setPage("home");
    } else {
      setError("Wrong email or password. Try charan@example.com / 1234");
    }
  }
 
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", padding: 24 }}>
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 400 }}>
        <h2 style={{ textAlign: "center", color: "#1e3a5f", marginBottom: 8 }}>🔑 Login</h2>
        <p style={{ textAlign: "center", color: "#6b7280", fontSize: 14, marginBottom: 28 }}>Demo: charan@example.com / 1234</p>
 
        <label style={labelStyle}>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={inputStyle} />
 
        <label style={labelStyle}>Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="••••••••" style={inputStyle}
          onKeyDown={e => e.key === "Enter" && handleLogin()} />
 
        {error && <p style={{ color: "#ef4444", fontSize: 13, marginBottom: 12 }}>{error}</p>}
 
        <button onClick={handleLogin} style={{ ...btnStyle("#1e3a5f"), width: "100%", fontSize: 15 }}>Login</button>
 
        <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#6b7280" }}>
          New here? <span style={{ color: "#3b82f6", cursor: "pointer" }} onClick={() => setPage("register")}>Create account</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;