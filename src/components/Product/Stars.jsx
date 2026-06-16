function Stars({ rating }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: 14 }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
      <span style={{ color: "#6b7280", fontSize: 12, marginLeft: 4 }}>({rating})</span>
    </span>
  );
}

export default Stars;