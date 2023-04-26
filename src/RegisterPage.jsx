import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { Button } from './components/Button'

const Register = () => {
  return (
    <div className="login-containers">
    <div className="register-container">
      {/* <header className="register-header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <div className="register-content">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input type="first_name" id="name" name="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name</label>
            <input type="last_name" id="last_name" name="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="userame">Username</label>
            <input type="username" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input type="confirm_password" id="confirm_password" name="pconfirm_password" />
          </div>
          <Button buttonSize='btn--wide' buttonColor='blue'>Sign Up</Button>
        </form>
      </div>
      {/* <footer className="register-footer">
        <p>© 2023 Blockvault Investment. All rights reserved.</p>
      </footer> */}
    </div>
    </div>
  );
};

export default Register;
