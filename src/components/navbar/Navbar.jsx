import React from 'react'
import './navbar.css'
import airbnbLogo from '../../assets/airbnb-logo.svg';


const Navbar = () => {
	return (
		<nav>
			<img
				className="nav--logo"
				src={airbnbLogo} alt="" />
		</nav>
	)
}

export default Navbar
