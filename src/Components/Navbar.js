import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Navbar.css'

const Navbar = ({ user }) => {
    return (
        <div className='nav'>
            <div className="logo">
                Recipes
            </div>
            <nav className="item">
                <ul className="ul">
                    <li>
                        <Link to='/home'>Home</Link>
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
                        {user === null ? <Link to='login'>Login</Link> : <button>Logout</button>}
                    </li>
                    {/* <li>
                        <Link to='welcome'>Welcome</Link>
                    </li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
