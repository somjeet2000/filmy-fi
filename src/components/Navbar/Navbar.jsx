import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import cookie from 'react-cookies';
import Logo from './Logo.png'

export default function Navbar(props) {
    console.log(props);

    const [login, setLogin] = useState(false);

    useEffect(() => {
        if (cookie.load('email')) {
            setLogin(true);
        } else {
            setLogin(false);
        }
    },[login])

    const Logout = () => {
        cookie.remove('email', {path: '/'});
        setLogin(false);
    }
    
    return(
        <div className='top'>
            <div className='topLeft'>
            <i className="topBarIcon fa-solid fa-bars"></i>
            <Link to='/'><img className= "topImage" src={Logo} alt='Logo' /></Link> 
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li><Link className='topListItem' to='/categories'>Categories</Link></li>
                    {/* <li className='topListItem'>Keyframe</li>
                    <li className='topListItem'>Submit Your Film</li> */}
                </ul>
            </div>
            <div className='topRight'>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                <ul className='topList'>
                    {
                        login ? 
                        <div style={{display:'flex'}}>
                            <div style={{color:'white', marginLeft:'20px',marginRight:'40px', width:'130px', fontWeight:'600', fontSize:'18px'}}>
                                <li>Hello, {cookie.load('firstname')}</li>
                            </div>
                            <div >
                                <li onClick={Logout}><Link to='/signin' className='topListItem1'>Logout</Link></li>
                            </div>
                        </div>
                        :
                        <>
                            <li><Link className='topListItem' to='/signin'>Sign In</Link></li>
                            <li><Link className='topListItem' to='/signup'>Sign Up</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    )
}