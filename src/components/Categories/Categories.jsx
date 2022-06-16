import React from 'react';
import { Link } from 'react-router-dom';
import "./Categories.css";

function Categories() {

    return(
        <div className='categories'>
            <h1 className='categoriesName'>
                Categories
            </h1>
            <div className='categoriesAllButton'>
                <Link to='/categories/action'><button className='categoriesButton'>
                    Action
                </button></Link>
                <Link to='/categories/comedy'><button className='categoriesButton'>
                    Comedy
                </button></Link>
                <Link to='/categories/drama'><button className='categoriesButton'>
                    Drama
                </button></Link>
                <Link to='/categories/thriller'><button className='categoriesButton'>
                    Thriller
                </button></Link>
            </div> 
        </div>
    )
    
}

export default Categories;