import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import axios from 'axios';

const EditUser = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3004/users/${id}`)
            .then((response) => {
                setName(response.data.name);
                setPhone(response.data.phone);
                setEmail(response.data.email);
                setProfileImage(response.data.profileImage);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const updateHandleUser = (e) => {
        e.preventDefault();

        const updatedUser = {
            name,
            phone,
            email,
            profileImage,
        };

        axios.put(`http://localhost:3004/users/${id}`, updatedUser)
            .then(() => {

                navigate('/usermanagment/users');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="wrapper">
            <Sidebar />

            <div className="main">
                <Header />

                <main className="content px-3 py-2">
                    <div className="container-fluid">
                        <div className="title-bar">
                            <h4>Edit User {name} </h4>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">
                                <form onSubmit={updateHandleUser}>
                                    <div className="mb-3">
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Phone:</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Profile Image URL:</label>
                                        <input
                                            type="text"
                                            name="profileImage"
                                            value={profileImage}
                                            onChange={(e) => setProfileImage(e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success">Update User</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default EditUser;
