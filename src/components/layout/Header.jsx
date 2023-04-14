import React from "react";

function Header() {
    /* 
        blue colors
        bg: #d4f1f4
        text: #05445e
        hover: #189AB4
        extra: #75E6DA
     */
    return (
        <div className="w-full mx-auto flex justify-center items-center py-3 px-3 bg-[#189AB4] mb-4">
            <h1 className="text-5xl font-bold text-[#05445e]">Rent Ma</h1>
        </div>
    );
}

export default Header;
