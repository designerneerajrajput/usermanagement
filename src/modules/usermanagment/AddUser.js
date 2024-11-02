import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import axios from 'axios';

const AddUser = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');

    const navigate = useNavigate();
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here',
    };
    const handleSubmit = (e) => {
        e.preventDefault();


        axios.get('http://localhost:3004/users')
            .then((response) => {
                const users = response.data;

                const maxId = users.length > 0 ? Math.max(...users.map(user => parseInt(user.id, 10))) : 0;
                const newUserId = (maxId + 1).toString();


                return axios.post('http://localhost:3004/users', {
                    id: newUserId,
                    name: name,
                    phone: phone,
                    email: email,
                    profileImage: profileImage
                }, {
                    headers: headers
                });
            })
            .then((res) => {
                console.log(res.data);
                navigate("/usermanagment/users");
            })
            .catch((err) => {
                console.log(err);
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
                            <h4>Add New User</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form >
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="profileImage" className="form-label">Profile Image URL</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="profileImage"
                                            value={profileImage}
                                            onChange={(e) => setProfileImage(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={handleSubmit}>Add User</button>
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

export default AddUser;
