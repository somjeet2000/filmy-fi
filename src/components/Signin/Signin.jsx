import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signin.css";
import cookie from 'react-cookies';
import axios from 'axios';
import Home from '../Home/Home';

function Signin(props) {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [login, setLogin] = useState(false);
    
    const apiCallSignin = (data) => {
        console.log(data);
        axios.post('http://localhost:80/signin.php', JSON.stringify(data))
          .then(function (response) {
            console.log(response);
            if(response.data && response.data.status === "Success") {
                console.log(response.data.firstname);
                console.log(response.data.email);
                cookie.save('firstname', response.data.firstname, {path: '/'});
                cookie.save('email', response.data.email, {path: '/'});
                console.log(cookie.load('firstname'));
                console.log(cookie.load('email'));
                props.history.push("/");
            }
            else if(response.data && response.data.status === "Failure") {
                setEmailError(response.data.message);
                setPasswordError(response.data.message);
            }
        })
          .catch(function (error) {
            console.log(error);
        });
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email.length === 0) {
            setEmailError("This field is required.");
        } else if(!regex.test(email)) {
            setEmailError("This is not a valid email format.");
        }

        if(password.length === 0) {
            setPasswordError("This field is required.");
            return;

        } else if(password.length<6) {
            setPasswordError("Password must be more than 6 character.");
            return;
        }

        apiCallSignin({email, password});
    };

    useEffect(() => {
        if(cookie.load('email')) {
            props.history.push('/');
            setLogin(true);
        } else {
            setLogin(false);
        }
    },[login])

    const handleChange = (event) =>
    {
        setEmailError('');
        setPasswordError('');
        const{name, value} = event.target;
        console.log(name, value);

        switch (name) {
            case "email":
                setEmail(value)
                break;
        
            default:
                break;
        }

        switch (name) {
            case "password":
                setPassword(value)
                break;
        
            default:
                break;
        }
    }

    if(cookie.load('email')) {
        return(
            <div style={{minHeight:'500px', backgroundColor:'black'}}></div>
        )
    }
    return (
        <div className='signin'>
            <div className='container'>
                <form className='signinForm' onSubmit={handleSubmit}>
                    <h2 className='signinTitle'>Welcome Back</h2>
                    <input className='signinInput' 
                        type="text" 
                        name="email" 
                        placeholder="email" 
                        value={email}
                        onChange={handleChange}
                    />
                    <label style={{color:"#bf2d31", fontWeight:'600'}}>{emailError}</label>
                    <input className='signinInput'
                        type="password" 
                        name='password' 
                        placeholder='password' 
                        value={password}
                        onChange={handleChange}
                    />
                    <label style={{color:"#bf2d31", fontWeight:'600'}}>{passwordError}</label>
                    <button className='signinForgot'>Forgot your Password?</button>
                    <button className='signinSignIn' type='submit'>Sign In</button>
                    <button className='signinSignUp'>
                        <Link className='signinSignUp' to='/signup'>
                            Create an Account here
                        </Link>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signin;