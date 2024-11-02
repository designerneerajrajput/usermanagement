import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa";
import "./dashboard.css";






import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

function Dashboard() {






    return (
        <div className="wrapper">
            <Sidebar />

            <div className="main">
                <Header />

                <main className="content px-3 py-2">
                    <div className="container-fluid">
                        <div className="title-bar">
                            <h4>Admin Dashboard</h4>
                            <ol class="breadcrumb mb-0"><li class="breadcrumb-item"><a>Home</a></li><li class="breadcrumb-item active" aria-current="page">Project Dashboard</li></ol>
                        </div>
                        <div className="row">
                            <div class="col-md-4">
                                <div class="card bg-gradient-start-1 ">
                                    <div class="card-body">
                                        <Link to="/usermanagment/users">
                                            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
                                                <div>
                                                    <p class="fw-medium text-primary-light mb-1">Total Users</p>
                                                    <h6 class="mb-0">20,000</h6>
                                                </div>
                                                <div class="icon-bar">
                                                    <FaUsers />
                                                </div>
                                            </div>
                                            <p class="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
                                                <span class="d-inline-flex align-items-center gap-1 text-success-main"><iconify-icon icon="bxs:up-arrow" class="text-xs"></iconify-icon> +5000</span>
                                                Last 30 days users
                                            </p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default Dashboard;
