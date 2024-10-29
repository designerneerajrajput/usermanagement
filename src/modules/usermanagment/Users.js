import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch users from backend
        axios.get('http://localhost:4000/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    // Delete user function
    const handleDelete = (id) => {
        console.log('Deleting user with ID:', id); // Log the ID being deleted
        if (window.confirm('Are you sure you want to delete this user?')) {
            axios.delete(`http://localhost:4000/users/${id}`)
                .then(response => {
                    console.log('Response from delete:', response.data);
                    setUsers(users.filter(user => user.id !== id)); // Update state after deletion
                    console.log('User deleted:', response.data);
                })
                .catch(error => {
                    console.error('Error deleting user:', error.response ? error.response.data : error.message);
                });
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    return (
        <div className="wrapper">
            <Sidebar />

            <div className="main">
                <Header />

                <main className="content px-3 py-2">
                    <div className="container-fluid">
                        <div className="title-bar">
                            <h4>Admin Dashboard</h4>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a>Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Project Dashboard</li>
                            </ol>
                        </div>

                        <Link to="/usermanagment/add-user" className="btn btn-success mb-3">Add User</Link>

                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-striped table-bordered">
                                    <thead className="table-light">
                                        <tr>
                                            <th>ID</th>
                                            <th>Profile Image</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map(user => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>
                                                    <img
                                                        src={user.profileImage}
                                                        alt={user.name}
                                                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                                    />
                                                </td>
                                                <td>{user.name}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <Link to={`/usermanagment/edit-user/${user.id}`} className='btn btn-primary me-2'>Edit</Link>
                                                    <button
                                                        type="button"
                                                        className='btn btn-warning'
                                                        onClick={() => handleDelete(user.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default UserTable;
