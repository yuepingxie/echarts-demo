import React from "react";
import MainBox from "./mainbox/mainBox";
const Layout = props => {
    return (
        <div>
            <MainBox />
            <hr />
            {props.children}
        </div>
    )
}

export default Layout