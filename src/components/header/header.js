import React, { useEffect, useState } from "react";
import moment from "moment";
import "./header.css";
import Nav from "../menu/menu";

export default function Header() {
    return (
        <div>
            <header className="App-header">
                <Nav />
                <h1>数据可视化-ECharts </h1>
                <Time />
            </header>
        </div>
    );
}

function Time() {
    const [nowTime, setNowTime] = useState(moment());

    useEffect(() => {
        const t = setInterval(() => {
            setNowTime(moment());
        }, 1000);

        return () => {
            clearTimeout(t); // 清除定时器
        };
    }, []);

    return (
        <div className="show-time">
            当前时间: {nowTime.format("YYYY-MM-DD HH:mm:ss")}
        </div>
    );
}
