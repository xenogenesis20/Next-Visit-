import React, { useEffect, useContext } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { Context } from "../store/appContext";

export const SignUp = () => {
	const { store, actions } = useContext(Context);

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
					<input type="text" id="name-input" className="form-control" />
					<label className="form-label" htmlFor="name-input">
						Full Name
					</label>
				</div>
				<div className="form-outline bg-light mb-3 p-1">
					<input type="text" id="email-input" className="form-control" />
					<label className="form-label" htmlFor="email-input">
						Email
					</label>
				</div>
				<div className="form-outline bg-light mb-3 p-1">
					<input type="number" id="phone-input" className="form-control" />
					<label className="form-label" htmlFor="phone-input">
						Phone
					</label>
				</div>
				<div className="form-outline bg-light mb-3 p-1">
					<input type="text" id="address-input" className="form-control" />
					<label className="form-label" htmlFor="address-input">
						Email
					</label>
				</div>

				<button type="button" className="btn btn-primary btn-rounded form-control">
					save
				</button>
			</form>
		</div>
	);
};
