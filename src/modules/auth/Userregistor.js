import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Userregistor() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [pphoto, setProphoto] = useState(null);
    const [agreewith, setAgreewith] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()




    const lnamehandlechange = (event) => {
        const lnamevalue = event.target.value;
        setLname(lnamevalue);
    }


    function emailHandleChnage(event) {
        const emailvalue = event.target.value;
        setEmail(emailvalue);
    }
    function phoneHandleChnage(event) {
        const phonevalue = event.target.value;
        setPhone(phonevalue);
    }
    function passwordhandleChange(event) {
        const passwordvalue = event.target.value;
        setPassword(passwordvalue)
    }
    function cpasswordhandleChange(event) {
        const cpasswordvalue = event.target.value;
        setCpassword(cpasswordvalue)
    }
    function pphotoHandleChange(event) {
        const photovalue = event.target.files[0];
        setProphoto(photovalue);
    }

    function agreewithHandleChange(event) {
        const agreevalue = event.target.checked;
        setAgreewith(agreevalue);
    }
    function handleSubmit(event) {
        event.preventDefault();



        if (fname === "" || lname === "" || email === "" || phone === "" || password === "" || !pphoto) {
            alert("All fields are required!");
            return;
        } else if (password !== cpassword) {
            alert("Passwords do not match!");
            return;
        } else if (!agreewith) {
            alert("You must agree with the Privacy Policy!");
            return;
        }
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            console.log({
                fname,
                lname,
                email,
                phone,
                password,
                pphoto,
                agreewith
            });
            navigate('/userlist')

            setFname("");
            setLname("");
            setEmail("");
            setPhone("");
            setPassword("");
            setCpassword("");
            setProphoto(null);
            setAgreewith(false);

        }, 1000);

    }

    return (
        <>



            <section className='login-page-wrapper'>
                <div className="container-fluid" >
                    <div className="row" >
                        <div className="col-12" >
                            <div className="login-card login-dark" >

                                <div className="login-main" >
                                    <form className="theme-form" onSubmit={handleSubmit}>
                                        <h4>Create your account</h4>
                                        <p>Enter your personal details to create account</p>
                                        <div className="form-group" >
                                            <label className="col-form-label pt-0">Your Name</label>
                                            <div className="row g-2" >
                                                <div className="col-6" >
                                                    <input className="form-control" type="text" required="" value={fname} onChange={(e) => { setFname(e.target.value) }} placeholder="First name" />
                                                </div>
                                                <div className="col-6" >
                                                    <input className="form-control" type="text" required="" value={lname} onChange={lnamehandlechange} placeholder="Last name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="col-md-6">
                                                <div className="form-group" >



                                                    <label className="col-form-label">Email Address</label>
                                                    <input className="form-control" type="email" required="" value={email} onChange={emailHandleChnage} placeholder="Email address" />
                                                </div>  </div>
                                            <div className="col-md-6">
                                                <div className="form-group" >
                                                    <label className="col-form-label">Phone</label>
                                                    <input className="form-control" type="text" required="" value={phone} onChange={phoneHandleChnage} placeholder="Phone" />
                                                </div></div>
                                        </div>

                                        <div className='row'>
                                            <div className="col-md-6">
                                                <div className="form-group" >
                                                    <label className="col-form-label">Password</label>
                                                    <div className="form-input position-relative" >
                                                        <input className="form-control" type="password" value={password} onChange={passwordhandleChange} required="" placeholder="*********" />
                                                        <div className="show-hide" ><span className="show"></span></div>
                                                    </div>
                                                </div></div>
                                            <div className="col-md-6">
                                                <div className="form-group" >
                                                    <label className="col-form-label">Confirm Password</label>
                                                    <div className="form-input position-relative" >
                                                        <input className="form-control" type="password" value={cpassword} onChange={cpasswordhandleChange} required="" placeholder="*********" />
                                                        <div className="show-hide" ><span className="show"></span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group" >
                                            <label className="col-form-label">Password</label>
                                            <div className="form-input position-relative" >
                                                <input className="form-control" type="file" onChange={pphotoHandleChange} required="" placeholder="uplaod Photo" />
                                                <div className="show-hide" ><span className="show"></span></div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0" >
                                            <div className="checkbox p-0 pb-10" >
                                                <input type="checkbox" checked={agreewith} onChange={agreewithHandleChange} />
                                                <label className="text-muted" >Agree with<a className="ms-2" href="#"  >Privacy Policy</a></label>
                                            </div>
                                            <button className="theme-btn btn-block w-100" type="submit" disabled={loading}>
                                                {loading ? (
                                                    <>
                                                        <span className="spinner"></span> Loading...
                                                    </>
                                                ) : (
                                                    'Create Account'
                                                )}
                                            </button>
                                        </div>


                                        <p className="mt-4 mb-0 text-center">Already have an account?<Link className="ms-2" to="/"  >Login in</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Userregistor