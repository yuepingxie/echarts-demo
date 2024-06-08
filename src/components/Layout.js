import React from "react";
import MainBox from "./mainbox/mainBox";
const Layout = props => {
    return (
        <div>
            <MainBox />
            {props.children}
        </div>
    )
}

export default Layout