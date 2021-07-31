import React from "react";
import "../../styles/signin.scss";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const SignIn = props => {
	const [user, setUser] = useState({
		password: null,
		username: null
	});

	const logIn = () => {
		fetch(store.apiAddress + "/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user)
		})
			.then(function(response) {
				if (!response.ok) {
					// add new modal for incorrect data
					alert("Incorect date or user exists");
					throw Error(response.statusText);
				}

				return response.json();
			})
			.then(function(responseAsJson) {
				console.log(responseAsJson);
				props.setLoggedIn(true);
				sessionStorage.setItem("user");
			})
			.catch(function(error) {
				alert("Incorect date or user exists");
				console.log("Looks like there was a problem: \n", error);
			});
	};
	return (
		<>
			<Navbar />
			<div className="container sign-in-box my-auto">
				<div className="d-flex justify-content-center h-100">
					<div className="card sign-in-card">
						<div className="card-header sign-in-card-header">
							<h3>Sign In</h3>
							<div className="d-flex justify-content-end social_icon">
								<span>
									<i className="fab fa-facebook-square" />
								</span>
								<span>
									<i className="fab fa-google-plus-square" />
								</span>
								<span>
									<i className="fab fa-twitter-square" />
								</span>
							</div>
						</div>
						<div className="card-body">
							<form>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-user" />
										</span>
									</div>
									<input type="text" className="form-control" placeholder="username" />
								</div>
								<div className="input-group form-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											<i className="fas fa-key" />
										</span>
									</div>
									<input type="password" className="form-control" placeholder="password" />
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" />
									Remember Me
								</div>
								<div className="form-group" onClick={() => props.setLoggedIn(true)}>
									<input type="submit" value="Login" className="btn float-right login_btn" />
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center links">
								Need an account?
								<a href="#">Sign Up</a>
							</div>
							<div className="d-flex justify-content-center">
								<a href="#">Forgot your password?</a>
							</div>
						</div>
					</div>
				</div>
				{props.loggedIn ? <Redirect to="DashboardHome" /> : ""}
			</div>
		</>
	);
};

SignIn.propTypes = {
	loggedIn: PropTypes.bool,
	setLoggedIn: PropTypes.func
};
