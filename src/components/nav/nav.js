import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav" style={{ color: "white" }}>
      <Link to="/" style={{ color: "white" }}>
        首页
      </Link>
      <Link to="/about" style={{ color: "white" }}>
        关于
      </Link>
    </div>
  );
}
