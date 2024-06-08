import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";
import { useSelector } from "react-redux";
import { logout } from "../../store/reducer/authSlice";
import { useDispatch } from 'react-redux';

export default function Menu() {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch();

    return (
        <div className="nav" style={{ color: "white" }}>
            <Link to="/" style={{ color: "white" }}>
                首页
            </Link>
            <Link to="/about" style={{ color: "white" }}>
                关于
            </Link>
            {
                auth.isLogged &&
                <>
                    <Link to="/profile" style={{ color: "white" }}>
                        {auth.user?.username}
                    </Link>
                    <Link to="/" onClick={() => dispatch(logout())} style={{ color: "white" }}>
                        登出
                    </Link>
                </>
            }
            {
                !auth.isLogged &&
                <Link to="/auth-form" style={{ color: "white" }}>
                    登录/注册
                </Link>
            }
        </div>
    );
}
