import React, { useState } from "react";
import "./Welcome.css";

function SignIn({ handleToggle }) {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const [isError, setisError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.username !== "codamy" && inputs.password !== "codamy") {
      setisError(true);
    } else {
      setisError(false);
    }
    console.log("Form Submitted");
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form" id="Login">
        <div className={isError ? "form-message__error" : "form-message"}>
          Incorrect Username or Password
        </div>
        <div className="form-input-group">
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={(e) => handleChange(e)}
            className="form-input"
            autoFocus
            placeholder="Username or Email"
          />
        </div>
        <div className="form-input-group">
          <input
            type="password"
            name="password"
            className="form-input"
            value={inputs.password}
            onChange={(e) => handleChange(e)}
            placeholder="Password"
          />
        </div>
        <button className="form-button">Sign In</button>
        <span className="form-text">Forgot your password?</span>
        <span className="form-text" onClick={() => handleToggle(true)}>
          Don't have an account? Create here.
        </span>
      </form>
    </>
  );
}

export default SignIn;
