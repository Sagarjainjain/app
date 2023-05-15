import React from 'react'
import "./login.css"
import Input from '../../components/input/input';

const Login = () => {
  return (
    <div className="ey-login">
      <div className="ey-login_card">
        <h1>Login</h1>
        <form>
          <Input
            placeholder="Enter Username"
            className="width-80"
            type="text"
          />
          <Input
            placeholder="Enter Password"
            className="width-80"
            type="text"
          />
          <button type="button">Login</button>
          <div className="ey-login_card-link">
            <p>Don't have an account? Sign Up</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login