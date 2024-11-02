import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdMenu } from "react-icons/io";
import Userprofile from '../../assets/images/user.png';


function Header() {
    const [isSidebarActive, setSidebarActive] = useState(false);

    const handleToggle = () => {
        setSidebarActive(!isSidebarActive);
    };
    return (
        <nav className="navbar navbar-expand px-3 border-bottom">
            <button className="btn" id="sidebar-toggle" type="button" onClick={handleToggle}>
                <IoMdMenu />
            </button>
            <div className="navbar-collapse navbar">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link to="#" data-bs-toggle="dropdown" className="nav-icon pe-md-0">
                            <img src={Userprofile} className="avatar img-fluid rounded" alt="" />
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                            <Link to="#" className="dropdown-item">Profile</Link>
                            <Link to="#" className="dropdown-item">Setting</Link>
                            <Link to="#" className="dropdown-item">Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header