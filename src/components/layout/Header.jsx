import React from "react";

function Header() {
    return (
        <div className="relative min-h-fit w-screen flex flex-col justify-center items-center">
            <div className="absolute bg-[#014715] w-full h-28 top-0 blur-sm"></div>
            <div className="bg-[#014715] w-[580px] md:w-[1200px] h-52 absolute top-0 rounded-b-md"></div>
        </div>
    );
}

export default Header;
