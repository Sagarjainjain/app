import React, { useState } from "react";
import "./signup.css";
import Input from "../../components/input/input";
// import FileBase from "react-file-base64"
import { useDispatch } from "react-redux";
import { createNewAccount } from "../../actions/auth";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [ishidden, setIsHidden] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [textcolor, setTextcolor] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createAccount, setCreateAccount] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    birthyear: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createAccount.password === "" && createAccount.confirmPassword === "") {
      setPasswordCheck("Passwords can't be Empty");
      setTextcolor(false);
    } else if (createAccount.password !== createAccount.confirmPassword) {
      setPasswordCheck("Password do not match");
      setTextcolor(false);
    } else {
      setPasswordCheck("Password match");
      setTextcolor(true);
      dispatch(createNewAccount(createAccount, navigate))
    }
  };
  return (
    <div className="ey-signup">
      <div className="ey-signup_card">
        <h1>Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <Input
              type="text"
              onChange={(e) =>
                setCreateAccount({
                  ...createAccount,
                  firstname: e.target.value,
                })
              }
              className="mg-r width-60"
              placeholder="First name"
            />
            <Input
              onChange={(e) =>
                setCreateAccount({
                  ...createAccount,
                  lastname: e.target.value,
                })
              }
              type="text"
              placeholder="Last name"
              className="mg-r width-60"
            />
          </div>
          <Input
            type="email"
            className="width-75"
            onChange={(e) =>
              setCreateAccount({
                ...createAccount,
                email: e.target.value,
              })
            }
            placeholder="Enter Email"
          />
          <div className="form-group">
            <Input
              type="text"
              Id="Date"
              onChange={(e) =>
                setCreateAccount({
                  ...createAccount,
                  birthyear: e.target.value,
                })
              }
              className="mg-r width-60"
              placeholder="Birth Year"
            />
            <Input
              type="text"
              onChange={(e) =>
                setCreateAccount({
                  ...createAccount,
                  gender: e.target.value,
                })
              }
              placeholder="Gender"
              className="width-60"
            />
          </div>
          {/* <div className="file-data">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setCreateAccount({ ...createAccount, profileimage: base64 })
              }
            />
          </div> */}
          <Input
            type="text"
            className="width-75 "
            placeholder="Create a Password"
            onChange={(e) =>
              setCreateAccount({
                ...createAccount,
                password: e.target.value,
              })
            }
          />
          <div className="ey-password">
            <div className="password-check">
              <Input
                type={ishidden ? "text" : "password"}
                className="width-80 margin-bt"
                placeholder="Confirm Password"
                onChange={(e) =>
                  setCreateAccount({
                    ...createAccount,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <p className={textcolor ? "green" : "red"}>{passwordCheck}</p>
            </div>
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

          <button type="submit" disabled={false}>
            Create Account
          </button>
          <div className="ey-signup_card-link">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p>Already have an Account? Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
