import React, { useEffect, useContext, useState } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";
import { ModalToSignIn } from "../component/ModalToSignIn";

export const SignUp = () => {
	const { store, actions } = useContext(GlobalState);
	const [user, setUser] = useState({
		name: null,
		email: null,
		phone: null,
		address: null,
		password: null
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

	return (
		<div className="container signup-box">
			<h4 className="text-center mt-2 p-3">Lets collect some basic information.</h4>
			<form>
				<div className="form-outline bg-light mb-3 p-1">
					<input
						type="text"
						id="name-input"
						className="form-control"
						name="name"
						onChange={handleInput}
						value={user.name}
					/>
					<label className="form-label" htmlFor="name-input">
						Full Name
					</label>
				</div>
				<div className="form-outline bg-light mb-3 p-1">
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
				<div className="form-outline bg-light mb-3 p-1">
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
				<div className="form-outline bg-light mb-3 p-1">
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
				<div className="form-outline bg-light mb-3 p-1">
					<input
						type="text"
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

				<button
					type="button"
					className="btn btn-primary btn-rounded form-control"
					onClick={() => setModalState(user)}>
					Submit
				</button>
			</form>
			<ModalToSignIn show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
