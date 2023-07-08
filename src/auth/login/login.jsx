import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { loginAccount } from "../../actions/auth";
import Input from "../../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [ishidden, setIsHidden] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAccount(loginData, navigate));
  };
  return (
    <div className="ey-login">
      <div className="ey-login_card">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Enter Email"
            className="width-85"
            type="text"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <div className="ey-password">
            <Input
              placeholder="Enter Password"
              className="width-80"
              type={ishidden ? "text" : "password"}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            {ishidden ? (
              <AiFillEye
                className="icon"
                size={30}
                onClick={() => setIsHidden(false)}
              />
            ) : (
              <AiFillEyeInvisible
                className="icon"
                size={30}
                onClick={() => setIsHidden(true)}
              />
            )}
          </div>
          <button type="submit">Login</button>
          <div className="ey-login_card-link">
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <p>Don't have an account? Sign Up</p>
            </Link>
          </div>
        </form>
        <div className="goback">
          <button
            type="button"
            id="btn"
            className="goback-btn"
            onClick={() => navigate("/")}
          >
            {" "}
            ↩ Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
