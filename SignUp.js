import React, { useState } from "react";
import "./Welcome.css";

function SignIn({ handleToggle }) {
  const [inputs, setInputs] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
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
          Incorrect Username or Passowrd
        </div>
        <div className="form-input-group">
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={(e) => handleChange(e)}
            className="form-input"
            autoFocus
            placeholder="Full Name"
          />
        </div>
        <div className="form-input-group">
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={(e) => handleChange(e)}
            className="form-input"
            placeholder="Username or Email"
          />
        </div>
        <div className="form-input-group">
          <input
            type="password"
            name="password"
            className="form-input"
            value={inputs.Password}
            onChange={(e) => handleChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="form-input-group">
          <input
            type="password"
            name="password"
            className="form-input"
            value={inputs.Password}
            onChange={(e) => handleChange(e)}
            placeholder="Confirm Password"
          />
        </div>
        <button className="form-button">Sign Up</button>
        <span className="form-text" onClick={() => handleToggle(false)}>
          Already have an account? Login here.
        </span>
      </form>
    </>
  );
}

export default SignIn;
