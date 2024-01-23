import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <div className='nav'>
            <div className='portfolio'>
                <h4>Portfolio</h4>
            </div>
            <div className='link'>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
    </div>

        </div>
    )
}

export default Nav