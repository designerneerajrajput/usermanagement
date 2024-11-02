import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import Footer from '../dashboard/Footer';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import Swal from 'sweetalert2';



import axios from 'axios';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchUser();
    }, []);


    const fetchUser = () => {
        axios.get('http://localhost:3004/users')
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    };

    const deleteHandleUser = (id) => {

        // SweetAlert2 confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:3004/users/${id}`)
                        .then(() => {

                            fetchUser();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            );
                        })
                        .catch((error) => {
                            console.error('Error deleting user:', error);
                            Swal.fire(
                                'Error!',
                                'There was an error deleting the user.',
                                'error'
                            );
                        });
                }
            });
    };
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.includes(searchQuery)
    );
    return (
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Header />
                <main className="content px-3 py-2">
                    <div className="container-fluid">
                        <div className="title-bar">
                            <h4>User Management</h4>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a>Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Users List</li>
                            </ol>
                        </div>
                        <div className='row'>

                            <div className='table-head row'>
                                <div className='col-md-4'>
                                    <div className='totle-use'>
                                        <h4>Total Users: <b>{users.length}</b></h4>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            placeholder="Search by name, email, or phone"
                                            className="form-control"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='col-md-2'><Link to="/usermanagment/add-user" className="btn btn-success mb-3"><IoIosAddCircleOutline />
                                    Add User</Link></div>
                            </div></div>


                        <div className="row">
                            <div className="col-md-12">
                                <table className="table ">
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
                                        {filteredUsers.length > 0 ? filteredUsers.map((user) => (




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
                                                    <Link to={`/usermanagment/edit-user/${user.id}`} className='btn btn-primary me-2'><CiEdit />
                                                        Edit</Link>
                                                    <button
                                                        type="button"
                                                        className='btn btn-danger'
                                                        onClick={() => deleteHandleUser(user.id)} // Pass the user ID here
                                                    >
                                                        <MdDeleteOutline />
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">No users found</td>
                                            </tr>
                                        )}
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
