import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Navbar.scss'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="logo">
                Recipe
            </div>
            <nav className="item">
                <ul className="ul">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                    <li>
                        <Link to='products'>Products</Link>
                    </li>
                    <li>
                        <Link to='recieps'>Your recipes</Link>
                    </li>
                    <li>
                        <Link to='login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
