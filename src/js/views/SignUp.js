import React, { useEffect, useContext, useState } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";
import { ModalToSignIn } from "../component/ModalToSignIn";

export const SignUp = () => {
	const { store, actions } = useContext(GlobalState);
	const [user, setUser] = useState({
		fullname: null,
		email: null,
		phone: null,
		address: null,
		password: null,
		username: null
	});
	const [state, setState] = useState({ showModal: false });
	const setModalState = userData => {
		actions.addUser(userData);
		setState({ showModal: true });
	};

	const handleInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	const handleSubmit = e => {
		e.preventDefault();
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
				setModalState(user);
			})
			.catch(function(error) {
				alert("Incorect date or user exists");
				console.log("Looks like there was a problem: \n", error);
			});
	};
	return (
		<>
			<div className="container h-100 d-flex justify-content-center align-items-center">
				<div className=" x">
					<h4 className="text-center mt-2 p-3">Lets collect some basic information.</h4>

					<div className="container h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-lg-12 col-xl-11">
								<div className="card text-black" style={{ borderRadius: "25px" }}>
									<div className="card-body p-md-5">
										<div className="row justify-content-center">
											<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
												<p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

												<form className="mx-1 mx-md-4" onSubmit={e => handleSubmit(e)}>
													<div className="d-flex flex-row align-items-center mb-4">
														<i className="fas fa-user fa-lg me-3 fa-fw"></i>
														<div className="form-outline flex-fill mb-0">
															<input
																type="text"
																id="name-input"
																className="form-control"
																name="fullname"
																onChange={handleInput}
																value={user.fullName}
															/>
															<label className="form-label" htmlFor="name-input">
																Full Name
															</label>
														</div>
													</div>

													<div className="d-flex flex-row align-items-center mb-4">
														<i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
														<div className="form-outline flex-fill mb-0">
															<input
																type="text"
																id="email-input"
																className="form-control"
																name="email"
																onChange={handleInput}
																value={user.email}
															/>
															<label className="form-label" htmlFor="email-input">
																Email
															</label>
														</div>
													</div>

													<div className="d-flex flex-row align-items-center mb-4">
														<i className="fas fa-lock fa-lg me-3 fa-fw"></i>
														<div className="form-outline flex-fill mb-0">
															<input
																type="number"
																id="phone-input"
																className="form-control"
																name="phone"
																onChange={handleInput}
																value={user.phone}
															/>
															<label className="form-label" htmlFor="phone-input">
																Phone
															</label>
														</div>
													</div>

													<div className="d-flex flex-row align-items-center mb-4">
														<i className="fas fa-house-user fa-lg me-3 fa-fw"></i>
														<i className="fas fa-house-user"></i>
														<div className="form-outline flex-fill mb-0">
															<input
																type="text"
																id="address-input"
																className="form-control"
																name="address"
																onChange={handleInput}
																value={user.address}
															/>
															<label className="form-label" htmlFor="address-input">
																Address
															</label>
														</div>
													</div>
													<div className="d-flex flex-row align-items-center mb-4">
														<i className="fas fa-key fa-lg me-3 fa-fw"></i>
														<div className="form-outline flex-fill mb-0">
															<input
																type="text"
																id="username"
																className="form-control"
																name="username"
																onChange={handleInput}
																value={user.username}
															/>
															<label className="form-label" htmlFor="username">
																Username
															</label>
														</div>
													</div>
													<div className="d-flex flex-row align-items-center mb-4">
														<i className="fas fa-key fa-lg me-3 fa-fw"></i>
														<div className="form-outline flex-fill mb-0">
															<input
																type="password"
																id="pw-input"
																className="form-control"
																name="password"
																onChange={handleInput}
																value={user.password}
															/>
															<label className="form-label" htmlFor="pw-input">
																Password
															</label>
														</div>
													</div>

													<div className="form-check d-flex justify-content-center mb-5">
														<input
															className="form-check-input me-2"
															type="checkbox"
															value=""
															id="form2Example3c"
														/>
														<label className="form-check-label" htmlFor="form2Example3">
															I agree with all statements in{" "}
															<a href="#!">Terms of service</a>
														</label>
													</div>

													<div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
														<button type="submit" className="btn btn-primary btn-lg">
															Register
														</button>
													</div>
												</form>
											</div>
											<div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
												<img
													src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png"
													className="img-fluid"
													alt="Sample image"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<ModalToSignIn show={state.showModal} onClose={() => setState({ showModal: false })} />
				</div>
			</div>
		</>
	);
};
