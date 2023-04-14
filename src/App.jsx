import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
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
            <div className="flex h-screen">
                <Sidebar />
                <main className="flex flex-col items-center justify-start w-full bg-[#f8f8f8]">
                    <Header />
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
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
