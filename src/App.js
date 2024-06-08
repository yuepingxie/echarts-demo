import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Profile from "./views/Profile.js";
import AuthPage from "./views/AuthPage.js";
import NeedAuth from "./components/NeedAuth.js";
import useAutoLogout from "./hooks/useAutoLogout.js";

function App() {
    const autoLogout = useAutoLogout();

    return (
        // <Layout>
        <div className="App">
            <Routes>
                <Route path="/" exact element={<NeedAuth><Home /></NeedAuth>}></Route>
                <Route path="/about" element={<NeedAuth><About /></NeedAuth>}></Route>
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
