import { useState } from "react";
import { DEMO_USER } from "../data/users";
import {
  inputStyle,
  labelStyle,
  btnStyle
} from "../styles/commonStyles";

function RegisterPage({ setUser, setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
 
  function handleRegister() {
    if (!name || !email || !password) return;
    const newUser = { name, email, password };
    setUser(newUser);
    setDone(true);
    setTimeout(() => setPage("home"), 1500);
  }
 
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", padding: 24 }}>
      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 16, padding: "40px 36px", width: "100%", maxWidth: 400 }}>
        <h2 style={{ textAlign: "center", color: "#1e3a5f", marginBottom: 24 }}>📝 Create Account</h2>
        {done ? (
          <p style={{ textAlign: "center", color: "#10b981", fontWeight: 600 }}>✓ Account created! Redirecting...</p>
        ) : (
          <>
            <label style={labelStyle}>Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
            <label style={labelStyle}>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={inputStyle} />
            <label style={labelStyle}>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Create password" style={inputStyle} />
            <button onClick={handleRegister} style={{ ...btnStyle("#1e3a5f"), width: "100%", fontSize: 15 }}>Create Account</button>
            <p style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "#6b7280" }}>
              Already have an account? <span style={{ color: "#3b82f6", cursor: "pointer" }} onClick={() => setPage("login")}>Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;