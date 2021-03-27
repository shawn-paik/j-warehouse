import { STATES } from 'mongoose';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	const [active,setActive] = useState('loads');
	
	function addActiveClass (e){
		const clicked = e.target.id
		if(active === clicked) { 
			setActive('');
		} else {
			setActive(clicked)
	   }
	}

	return (
		<nav className="navbar navbar-inverse navbar-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link to="/" className={`navbar-brand ${active === "loads" ? "active" : "" }`} id="loads" onClick={addActiveClass}>
						Loads
					</Link>
					<Link to="/orders" className={`navbar-brand ${active === "orders" ? "active" : "" }`} id="orders" onClick={addActiveClass}>
						Orders
					</Link>
				</div>
			</div>
		</nav>
	)

};

export default Nav;
