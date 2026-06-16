function NavBtn({ label, onClick, active }) {
  return (
    <button onClick={onClick} style={{ background: active ? "#3b82f6" : "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", padding: "7px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, whiteSpace: "nowrap" }}>
      {label}
    </button>
  );
}

export default NavBtn;