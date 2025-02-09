// import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-60 backdrop-blur-md rounded-lg m-4 p-4 shadow-lg">
                <ul className="flex justify-around">
                    <li>
                        <NavLink to="/" exact className="text-gray-700 hover:text-gray-900" activeclassname="text-blue-500">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-gray-700 hover:text-gray-900" activeclassname="text-blue-500">
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className="text-gray-700 hover:text-gray-900" activeclassname="text-blue-500">
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="text-gray-700 hover:text-gray-900" activeclassname="text-blue-500">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header