import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { RiSettings4Line, RiAdminLine } from "react-icons/ri";
import { BsHousesFill } from "react-icons/bs";
import {
    FiSettings,
    FiShoppingCart,
    FiMessageSquare,
    FiFolder
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Sidebar() {
    const [open, setOpen] = useState(true);
    const menus = [
        { name: "admin", link: "/", icon: RiAdminLine },
        { name: "user", link: "/", icon: AiOutlineUser },
        {
            name: "properties",
            link: "/",
            icon: BsHousesFill,
            margin: true
        },
        { name: "cart", link: "/", icon: FiShoppingCart },
        { name: "saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "messages", link: "/", icon: FiMessageSquare },
        { name: "settings", link: "/", icon: RiSettings4Line }
    ];

    /* 
        beige colors
        bg: #d4a373
        text: #e9edc9z
        hover: #bc6c25
     */

    /* 
        blue colors
        bg: #d4f1f4
        text: #05445e
        hover: #189AB4
        extra: #75E6DA
     */
    return (
        <>
            <div
                className={`bg-[#d4f1f4] flex flex-col justify-between min-h-screen py-2 duration-500 ${
                    open ? "w-72" : "w-16"
                } text-[#05445e]`}
            >
                <div>
                    <div className="flex justify-end mb-3 py-3 px-3">
                        <RiMenu5Fill
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    <div className="relative flex flex-col gap-4 px-3">
                        {menus.map((menu, i) => (
                            <Link
                                to={menu.link}
                                key={i}
                                className="group flex items-center gap-3.5 text-sm font-medium p-3 rounded-md hover:bg-[#189AB4]"
                            >
                                <div>
                                    {React.createElement(menu?.icon, {
                                        size: "20"
                                    })}
                                </div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`
                                    }}
                                    className={`whitespace-pre duration-500 ${
                                        !open &&
                                        "opacity-0 translate-x-28 overflow-hidden"
                                    }`}
                                >
                                    {menu?.name}
                                </h2>
                                {/* ccd5ae */}
                                <h2
                                    className={`${
                                        open && "hidden"
                                    } absolute whitespace-pre font-medium left-48 drop-shadow-lg bg-[#189AB4] text py-0 px-0 rounded-md overflow-hidden w-0 group-hover:left-20 group-hover:py-1 group-hover:px-2 group-hover:duration-300 group-hover:w-fit`}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex  justify-start px-5">
                    <h2
                        className={`overflow-hidden text-2xl font-bold duration-500 ${
                            !open && "hidden"
                        }`}
                        px-3
                    >
                        Rent Ma
                    </h2>
                </div>
            </div>
        </>
    );
}
// bg-[#faedcd]
export default Sidebar;
