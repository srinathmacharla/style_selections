import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    const[value, setValue] = useState(false)

    return (
        <div className="navbar-main-container">
            <div className='navbar-container'>
                <div className="menu-icon-container">
                    <FaBars  className="menu-icon" onClick={() => {
                        setValue(!value)
                        console.log('[called]')
                    }}/>
                </div>
                <Link to='/' className="logo">Arrivals</Link>
                <div className="search-container">
                    <input 
                        className='search-input'
                        type='search' 
                        placeholder='search arrivals' 
                        onChange={(e) => {
                            console.log(e.target.value, "called")
                        }}
                        onKeyDown={(e) => {
                            console.log(e.key)
                        }}
                    />
                </div>
                <div className="navbar-icons-container">
                    <Link to='/'><FaRegUser className="nav-icon" /></Link>
                    <Link to='/'><FaRegHeart className="nav-icon" /></Link>
                    <Link to='/'><FaShoppingCart className="nav-icon" /></Link>
                </div>
            </div>
            <div className="navbar-category-container" >
                <div className={value ? "something specific-category-container" : "specific-category-container"}>
                    <p className="specific-category">Men</p>
                    <p className="specific-category">Women</p>
                    <p className="specific-category">Kids</p>
                    <p className="specific-category">Clothing</p>
                    <p className="specific-category">Accessories</p>
                    <p className="specific-category">Offers</p>
                </div>
            </div>
       </div>
    )
}

export default Navbar