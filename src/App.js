import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Profile from "./views/Profile.js";
import AuthPage from "./views/AuthPage.js";
import { useSelector } from "react-redux";
import NeedAuth from "./components/NeedAuth.js";

function App() {
    const auth = useSelector(state => state.auth)

    return (
        // <Layout>
        <div className="App">
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/auth-form" element={<AuthPage />}></Route>
                <Route path="/profile" element={<NeedAuth><Profile /></NeedAuth>}>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
        // </Layout>
    );
}

export default App;
