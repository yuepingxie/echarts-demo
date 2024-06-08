import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Nav() {
    return (
        <div className="nav" style={{ color: "white" }}>
            <Link to="/" style={{ color: "white" }}>
                首页
            </Link>
            <Link to="/about" style={{ color: "white" }}>
                关于
            </Link>
            <Link to="/auth-form" style={{ color: "white" }}>
                登录/注册
            </Link>
        </div>
    );
}
