import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/Login.js";
import Profile from "./views/Profile.js";
import Layout from './components/Layout.js'
import AuthPage from "./views/AuthPage.js";

function App() {
    return (
        // <Layout>
        <div className="App">
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/auth-form" element={<AuthPage />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
        // </Layout>
    );
}

export default App;
