import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Button } from './components/Button'

const Login = () => {
  return (
    <div className="login-containers">
    <div className="login-container">
      {/* <header className="login-header"> */}
        {/* <nav>
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
      <div className="login-content">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address/Username</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <Button buttonSize='btn--wide' buttonColor='blue'>Login</Button>
          {/* <div className="form-group">
            <button type="submit">Login</button>
          </div> */}
        </form>
      </div>
      {/* <footer className="login-footer">
        <p>© 2023 Blockvault Investment. All rights reserved.</p>
      </footer> */}
    </div>
    </div>
  );
};

export default Login;
