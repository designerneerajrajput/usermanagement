import React from 'react'
import { useState } from 'react';
import { RiDashboard3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


import { IoIosArrowForward } from "react-icons/io"; import { FaUsers } from "react-icons/fa";

function Sidebar() {

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSidebarActive, setSidebarActive] = useState(false);
    const handleToggle = () => {
        setSidebarActive(!isSidebarActive);
    };


    const handleDropdownToggle = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };
    return (
        <aside id="sidebar" className={`js-sidebar ${isSidebarActive ? 'active' : ''}`}>
            <div className="h-100">
                <div className="sidebar-logo">
                    <Link to="#">Designer Neeraj</Link>
                </div>
                <ul className="sidebar-nav">
                    <li className="sidebar-item">
                        <Link to="/dashboard" className="sidebar-link">
                            <RiDashboard3Line /> Dashboard
                        </Link>
                    </li>


                    <li className={`sidebar-item ${activeDropdown === 1 ? 'active' : ''}`}>
                        <Link
                            to="#"
                            className="sidebar-link"
                            onClick={() => handleDropdownToggle(1)}
                        >
                            <FaUsers />  User Management <span> <IoIosArrowForward /></span>
                        </Link>
                        <ul className={`sidebar-dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
                            <li className="sidebar-item">
                                <Link to="/usermanagment/users" className="sidebar-link">Total Users</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="/usermanagment/add-user" className="sidebar-link">Add New User</Link>
                            </li>
                        </ul>
                    </li>


                    <li className={`sidebar-item ${activeDropdown === 2 ? 'active' : ''}`}>
                        <Link
                            to="#"
                            className="sidebar-link"
                            onClick={() => handleDropdownToggle(2)}
                        >
                            Posts <span> <IoIosArrowForward /></span>
                        </Link>
                        <ul className={`sidebar-dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
                            <li className="sidebar-item">
                                <Link to="#" className="sidebar-link">Page 1</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="#" className="sidebar-link">Page 2</Link>
                            </li>
                        </ul>
                    </li>


                    <li className={`sidebar-item ${activeDropdown === 3 ? 'active' : ''}`}>
                        <Link
                            to="#"
                            className="sidebar-link"
                            onClick={() => handleDropdownToggle(3)}
                        >
                            Auth <span> <IoIosArrowForward /></span>
                        </Link>
                        <ul className={`sidebar-dropdown ${activeDropdown === 3 ? 'active' : ''}`}>
                            <li className="sidebar-item">
                                <Link to="#" className="sidebar-link">Login</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="#" className="sidebar-link">Register</Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to="#" className="sidebar-link">Forgot Password</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar