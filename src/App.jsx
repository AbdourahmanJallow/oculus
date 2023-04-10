import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import {
//     Home,
//     SignUp,
//     SignIn,
//     ResetPassword,
//     ForgotPassword
// } from "./components";

function App() {
    return (
        <Router>
            <div className="flex flex-col justify-between h-screen items-center">
                {/* <Header /> */}
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/sign-in" element={<SignIn />} />
                        <Route
                            path="/forgot-password"
                            element={<ForgotPassword />}
                        />
                        <Route
                            path="/reset-password"
                            element={<ResetPassword />}
                        />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
