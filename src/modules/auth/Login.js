import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [isLogin, setIsLogin] = useState(false)
  function handleEmailChange(event) {
    const emailValue = event.target.value;
    setEmail(emailValue);

  }
  function handlePasswordChange(event) {
    const passvalue = event.target.value;
    setPassword(passvalue);
  }

  function handleRememberMeChange() {
    setRememberMe(!rememberMe);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setLoading(false);
    if (email === "" || password === "" || !rememberMe) {
      alert("All fields are required!");
    } else {


      const isLogin = true;
      setLoading(true); // Show loader
      setTimeout(() => {


        setLoading(false); // Hide loader after 1 second
        console.log({
          email: email,
          password: password,
          rememberMe: rememberMe,
        });
        setIsLogin(true)
        if (isLogin) {
          alert(`Login Successful! Your email is: ${email}, Your Password is: ${password}`);
          navigate("/dashboard")
        }


        setEmail('');
        setPassword('');

      }, 1000);
    }








  }




  return (
    <>
      <section className='login-page-wrapper'>
        <div className="container-fluid" >
          <div className="row" >
            <div className="col-12" >
              <div className="login-card login-dark" >

                <div className="login-main">
                  <form className="theme-form" onSubmit={handleSubmit}>
                    <h4>Sign in to account</h4>
                    <p>Enter your email &amp; password to login</p>

                    <div className="form-group">
                      <label className="col-form-label">Email Address</label>
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter email id"
                        value={email}
                        onChange={handleEmailChange}

                      />
                    </div>

                    <div className="form-group">
                      <label className="col-form-label">Password</label>
                      <div className="form-input position-relative">
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={handlePasswordChange}

                        />
                        <div className="show-hide">
                          {/* You can add logic to show/hide password */}
                          <span className="show"></span>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="checkbox">
                        <input
                          id="checkbox1"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={handleRememberMeChange}
                        />
                        <label className="text-muted" htmlFor="checkbox1">
                          Remember password
                        </label>
                      </div>

                      <Link className="link" to="/forgot-password">
                        Forgot password?
                      </Link>

                      <div className="text-end">
                        <div className="text-end">
                          <button className="theme-btn btn-block w-100" type="submit" disabled={loading}>
                            {loading ? (
                              <>
                                <span className="spinner"></span> Loading...
                              </>
                            ) : (
                              'Sign in'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    {isLogin &&
                      <>
                        <p class="succesloging">You Have Successfully Login.</p>

                      </>

                    }
                    <p className="text-center dont-have-account">
                      Don't have an account?
                      <Link className="ms-2" to="/Createaccount">
                        Create Account
                      </Link>
                    </p>
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

export default Login