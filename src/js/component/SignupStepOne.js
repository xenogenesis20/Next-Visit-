import React from "react";
import PropTypes from "prop-types";

export const SignupStepOne = props => {
	const proceed = e => {
		props.nextStep();
	};

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
						onChange={props.handleInput}
						value={props.values.name}
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
						onChange={props.handleInput}
						value={props.values.email}
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
						onChange={props.handleInput}
						value={props.values.phone}
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
						onChange={props.handleInput}
						value={props.values.address}
					/>
					<label className="form-label" htmlFor="address-input">
						Address
					</label>
				</div>

				<button type="button" className="btn btn-primary btn-rounded form-control" onClick={() => proceed()}>
					Continue
				</button>
			</form>
		</div>
	);
};
SignupStepOne.propTypes = {
	nextStep: PropTypes.func,
	handleInput: PropTypes.func,
	values: PropTypes.object
};
