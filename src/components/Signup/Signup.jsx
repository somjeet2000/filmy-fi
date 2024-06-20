import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import cookie from "react-cookies";
import axios from "axios";

function Signup(props) {
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cnfPassword, setConfirmPassword] = useState("");
  const [cnfPasswordError, setConfirmPasswordError] = useState("");
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const apiCall = (data) => {
    console.log(data);
    axios
      .post("http://localhost:80/fandor/test.php", JSON.stringify(data))
      .then(function (response) {
        console.log(response);
        if (response.data && response.data.status === "Failure") {
          setEmailError(response.data.message);
        } else if (response.data && response.data.status === "Success") {
          setRegister(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    let isValid = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fname.length === 0) {
      setFnameError("This field is required.");
      isValid = false;
    }
    if (lname.length === 0) {
      setLnameError("This field is required.");
      isValid = false;
    }
    if (email.length === 0) {
      setEmailError("This field is required.");
      isValid = false;
    } else if (!regex.test(email)) {
      setEmailError("This is not a valid email format.");
      isValid = false;
    }
    if (password.length === 0) {
      setPasswordError("This field is required.");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be more than 6 characters.");
      isValid = false;
    }
    if (cnfPassword.length === 0) {
      setConfirmPasswordError("This field is required.");
      isValid = false;
    } else if (cnfPassword != password) {
      setConfirmPasswordError("Password Mismatched.");
      isValid = false;
    }
    if (
      isValid &&
      fname.trim().length > 0 &&
      lname.trim().length > 0 &&
      email.trim().length > 0 &&
      password.trim().length > 0
    ) {
      apiCall({ fname, lname, email, password });
    }
  };

  useEffect(() => {
    if (cookie.load("email")) {
      props.history.push("/");
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  const handleChange = (event) => {
    event.preventDefault();
    setFnameError("");
    setLnameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    const { name, value } = event.target;
    console.log(name, value);

    switch (name) {
      case "firstname":
        setFname(value);
        break;

      default:
        break;
    }

    switch (name) {
      case "lastname":
        setLname(value);
        break;

      default:
        break;
    }

    switch (name) {
      case "email":
        setEmail(value);
        break;

      default:
        break;
    }

    switch (name) {
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }

    switch (name) {
      case "cnfpassword":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  if (cookie.load("email")) {
    return <div style={{ minHeight: "500px", backgroundColor: "black" }}></div>;
  }

  return (
    <div className="signup">
      {register || (
        <div className="container" style={{ textAlign: "center!important" }}>
          <h2 className="signupTitle">Sign Up</h2>
          <form className="signupForm">
            <div className="signupName">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "30px",
                }}
              >
                <input
                  className="signupInput"
                  type="text"
                  name="firstname"
                  placeholder="first name"
                  value={fname}
                  onChange={handleChange}
                />
                <label className="signupErrorName">{fnameError}</label>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  className="signupInput"
                  type="text"
                  name="lastname"
                  placeholder="last name"
                  value={lname}
                  onChange={handleChange}
                />
                <label className="signupErrorName">{lnameError}</label>
              </div>
            </div>
            <input
              className="signupUser"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
            />
            <div className="signupError">{emailError}</div>
            <input
              className="signupUser"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handleChange}
            />
            <div className="signupError">{passwordError}</div>
            <input
              className="signupUser"
              type="password"
              name="cnfpassword"
              placeholder="confirm password"
              value={cnfPassword}
              onChange={handleChange}
            />
            <div className="signupError">{cnfPasswordError}</div>
            <div
              style={{ color: "white", letterSpacing: "1px", padding: "5px" }}
            >
              By clicking Continue, you agree to the FilmyFi{" "}
              <b style={{ fontWeight: "normal", color: "#d7c77d" }}>
                Terms of Use
              </b>{" "}
              and{" "}
              <b style={{ fontWeight: "normal", color: "#d7c77d" }}>
                Privacy Policy.
              </b>
            </div>
            <button
              onClick={(event) => handleSubmit(event)}
              className="signupSubmit"
              name="submit"
            >
              Continue
            </button>
            {/* <div style={{color:"white", letterSpacing:'1px', padding:'10px'}}>
                        Would you like to become a Premium Member and get all of our movies and shows commercial free? 
                    </div>
                    <button className='signupMember'>
                        Become a premium member
                    </button> */}
            <div
              style={{ color: "white", letterSpacing: "1px", padding: "5px" }}
            >
              Already have an account ?
              <button className="signupSignin">
                <Link className="signupSignin" to="/signin">
                  Sign In.
                </Link>
              </button>
            </div>
          </form>
        </div>
      )}
      {register && (
        <div
          style={{
            height: "100px",
            width: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label className="registerMsg">Registered Successfully !!!</label>
          <Link to="/signin">
            <button className="registerBtn">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Signup;
