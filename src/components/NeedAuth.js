import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const NeedAuth = props => {
    const auth = useSelector(state => state.auth);
    console.log(auth);
    const location = useLocation();
    console.log(location);

    return auth.isLogged ?
        props.children :
        <Navigate to={"/auth-form"}
            replace
            state={{ preLocation: location }}
        />
}
export default NeedAuth;