import React from "react";
import "./mainBox.css";
import MainLeft from "./mainLeft";
import MainMiddle from "./mainMiddle";
import MainRight from "./mainRight";
import Header from "../header/header";


export default function MainBox() {
    return (
        <>
            <Header />
            <section className="mainbox">
                <MainLeft />
                <MainMiddle />
                <MainRight />
            </section>
        </>
    );
}
