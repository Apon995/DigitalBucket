import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/LogoFolder/Logo.png";
import useAuth from "../CustomHooks/useAuth";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
    const [navbackground, setNavbackground] = useState(false);
    const { user, LogOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleNavbackgound = () => {
        if (window.scrollY > 90) {
            setNavbackground(true);
        } else {
            setNavbackground(false);
        }
    };

    useEffect(() => {

        if (location.pathname == '/Register' || location.pathname == '/Login') {
            setNavbackground(true)
        }
        else {
            window.addEventListener("scroll", handleNavbackgound);

        }
    }, [location.pathname]);


    const HandleLogOut = () => {

        LogOut()
            .then(()=> {
                toast.success("sign out succesfull ! ", {
                    position: "top-center",
                    hideProgressBar: true,
                    autoClose: 3000
                })
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        // bg-[#635fc7]
        <>
            <nav
                className={` flex fixed top-0 left-0 z-50 items-center justify-between py-4 px-[2%] w-full bg-${navbackground ? "[#635fc7]" : "inherit"
                    }`}
            >
                <div className="flex items-center gap-1">
                    <img src={Logo} alt="Logo" className="w-[30px]" />
                    <h1 className="font-bold text-xl text-white tracking-widest uppercase">
                        DigitalBucket
                    </h1>
                </div>

                <div>
                    <ul
                        id="navbar-link"
                        className="flex items-center gap-2 text-white font-medium tracking-widest "
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    {user ? (
                        <div className="flex items-center gap-2 text-white">
                            {/* --LOG-out-BUTTON-- */}
                            <i className="fa-solid fa-right-from-bracket text-2xl"></i>
                            <button
                                onClick={HandleLogOut}
                                className={` px-3 py-2 border-2 border-white rounded-md font-medium active:bg-black   `}
                            >
                                sign out
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-white">
                            {/* --LOG-in-BUTTON-- */}
                            <i className="fa-solid fa-arrow-right-to-bracket text-2xl"></i>
                            <button onClick={() => navigate("/Login")}
                                className={` px-3 py-2 border-2 border-white rounded-md font-medium active:bg-black   `}
                            >
                                sign in
                            </button>
                        </div>
                    )}
                </div>
            </nav>


            <ToastContainer/>
        </>
    );
}

export default Navbar;
