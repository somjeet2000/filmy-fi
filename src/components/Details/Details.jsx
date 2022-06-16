import React, { useState } from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';

function Details(props) {
    
    const [showalert, setShowAlert] = useState(false);

    console.log(props);

    const checkLogin = () => {
        if (cookie.load('email')) {
            props.history.push('/play');
        } else {
            setShowAlert(true);
        }
    }

    const {itemDetails, itemImage, itemTitle, itemDirectors, itemCasts} = props.location.state;
    return(
            <>
                <div className='imageDetails' style={{ backgroundImage: `url(${itemImage})`}}>
                    <div className='details'>
                        <div className='leftContainer'>
                            <h1 className='imageTitle'>{itemTitle}</h1>
                            <div>
                                <p id='imageDetails'>{itemDetails}</p>
                            </div>
                            <div>
                                <i onClick={checkLogin} className="iconPlay fa-solid fa-circle-play"></i>
                                <i className="iconPlus fa-solid fa-circle-plus"></i>
                            </div>
                        </div>
                        <div className='rightContainer'>
                            <h2 className='rightTitle'>Cast and Crew</h2>
                            <div style={{width:'230px'}}>
                                <p className='imageDirector'>Directors: {itemDirectors}</p>
                                <p className='imageCast'>Casts: {itemCasts}</p>
                            </div>
                        </div>
                    </div>
                    {
                        showalert && <div className='alert'>
                            <div className='alertItems'>
                                <h1 className='alertText'>You need Login to watch this movie</h1>
                                <div>
                                    <Link to='/signin'><button className='alertBtn'>Ok</button></Link> 
                                    <button className='alertBtn1' onClick={() => setShowAlert()}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </>

    )
}

export default Details;