import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';

const AddUser = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // Fetch current users to determine next ID
    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {

            name,
            phone,
            email,
            profileImage: profileImage || 'https://randomuser.me/api/portraits/men/1.jpg',
        };

        axios.post('http://localhost:4000/users', newUser)
            .then(response => {
                console.log('User added:', response.data);
                setUsers([...users, response.data]);
                navigate('/usermanagment/users');
            })
            .catch(error => {
                console.error('Error adding user:', error);
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
                                <form onSubmit={handleSubmit}>
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
                                    <button type="submit" className="btn btn-success">Add User</button>
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
