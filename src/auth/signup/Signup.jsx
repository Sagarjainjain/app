import React from 'react'
import "./signup.css"
import Input from "../../components/input/input"

const Signup = () => {
  return (
    <div className="ey-signup">
      <div className="ey-signup_card">
        <h1>Create an Account</h1>
        <form>
          <div className="form-group">
            <Input
              type="text"
              className="mg-r width-60"
              placeholder="First name"
            />
            <Input
              type="text"
              placeholder="Last name"
              className="mg-r width-60"
            />
          </div>
          <Input type="email" className="width-80" placeholder="Enter Email" />
          <div className="form-group">
            <Input
              type="text"
              Id="Date"
              className="mg-r width-60"
              placeholder="Date of Birth"
            />
            <Input type="text" placeholder="Gender" className="width-60" />
          </div>
          <Input type="file" className="width-80" placeholder="Enter Email" />
          <Input
            type="text"
            className="width-80 "
            placeholder="Enter Password"
          />
          <Input
            type="text"
            className="width-80"
            placeholder="Confirm Password"
          />
          <button type="button">Create Account</button>
          <div className="ey-signup_card-link">
            <p>Already have an Account? Login</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup