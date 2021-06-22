import React from "react";
import PropTypes from "prop-types";

export const SignupStepThree = props => {
	const proceed = e => {
		props.nextStep();
	};
	// As a Reg. User, I want to be able to input basic user info: vitals, personal information, medications, allergies, family history, caffeine use, type of diet, gender, profile picture.
	return (
		<div className="container signup-box">
			<h4 className="text-center mt-2 p-3">A little more information and we are done!</h4>
			<form>
				<div className="form-outline bg-light mb-3 p-1">
					<input type="number" id="height-input" className="form-control" name="height" />
					<label className="form-label" htmlFor="name-input">
						How tall are you? (in inches)
					</label>
				</div>
				<div className="form-outline bg-light mb-3 p-1">
					<input type="number" id="weight-input" className="form-control" name="weight" />
					<label className="form-label" htmlFor="name-input">
						How much do you weigh? (in pounds)
					</label>
				</div>
				<select className="form-select mb-3 p-1" aria-label="Default select example">
					<option selected>Type of diet</option>
					<option value="1">Regular</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
				<div className="form-outline bg-light mb-3 p-1">
					<input type="number" id="phone-input" className="form-control" name="phone" />
					<label className="form-label" htmlFor="phone-input">
						Phone
					</label>
				</div>
				<div className="form-outline">
					<textarea className="form-control" id="family-history" rows="4" />
					<label className="form-label" hmtlFor="family-history">
						Here you can list family history such as: hypertension, cancer, high cholesterol, anxiety etc.
					</label>
				</div>
				<button
					type="button"
					className="btn btn-primary btn-rounded form-control"
					onClick={() => props.prevStep()}>
					Go back
				</button>
				<button type="button" className="btn btn-primary btn-rounded form-control" onClick={() => proceed()}>
					Continue
				</button>
			</form>
		</div>
	);
};
SignupStepThree.propTypes = {
	nextStep: PropTypes.func,
	prevStep: PropTypes.func,
	handleInput: PropTypes.func
};
