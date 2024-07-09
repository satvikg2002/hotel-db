import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Hotels Dashboard</h1>
      <div className="links">
        <Link to="/search" style={{ color: "rgb(77, 77, 77)" }}>
          Search
        </Link>
        <Link to="/" style={{ color: "rgb(77, 77, 77)" }}>
          All Hotels
        </Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "rgb(77,77,77)",
            borderRadius: "8px",
          }}
        >
          New Hotels
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
