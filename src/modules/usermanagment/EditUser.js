import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        phone: '',
        email: '',
        profileImage: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch user data
        axios.get(`http://localhost:4000/users/${id}`)
            .then(response => {
                setUser(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (event) => {

        const inputName = event.target.name;
        const inputValue = event.target.value;



        setUser((prevUser) => {

            return {
                ...prevUser,
                [inputName]: inputValue
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/users/${id}`, user)
            .then(response => {
                console.log('User updated:', response.data);
                navigate('/usermanagment/users');
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }





    return (

        <div className="wrapper">
            <Sidebar />

            <div className="main">
                <Header />

                <main className="content px-3 py-2">
                    <div className="container-fluid">
                        <div className="title-bar">
                            <h4>Edit User</h4>
                        </div>
                        <div className='row'>
                            <div className="col-md-12">


                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Phone:</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Profile Image URL:</label>
                                        <input
                                            type="text"
                                            name="profileImage"
                                            value={user.profileImage}
                                            onChange={handleChange}
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
