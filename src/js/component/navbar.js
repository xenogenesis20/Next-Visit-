import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#111213ff" }}>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Next Visit
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  me-auto mb-2 mb-lg-0">
						{/* <li className="nav-item">
							<Link to="/">
								<a href="#about-card" className="anchor nav-link">
									Features
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/">
								<a href="#about-us" className="anchor nav-link">
									About Us
								</a>
							</Link>
						</li> */}
						{props.loggedIn ? (
							""
						) : (
							<li className="nav-item">
								<Link className="nav-link" to="/SignUp">
									Register
								</Link>
							</li>
						)}
						{props.loggedIn ? (
							""
						) : (
							<li className="nav-item">
								<Link className="nav-link" to="/SignIn">
									Sign In
								</Link>
							</li>
						)}

						{props.loggedIn ? (
							<li className="nav-item">
								<Link className="nav-link" to="/DashboardHome">
									Dashboard
								</Link>
							</li>
						) : (
							""
						)}
						{/* <li className="nav-item">
							<Link className="nav-link" to="/FindDoctor">
								Find a doctor
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
