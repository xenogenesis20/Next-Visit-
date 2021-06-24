import React, { useEffect, useContext, useState } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { Context } from "../store/appContext";
import { SignupStepOne } from "../component/SignupStepOne";
import { SignupStepTwo } from "../component/SignupStepTwo";
import { SignupStepThree } from "../component/SignupStepThree";
import { SignupSuccess } from "../component/SignupSuccess";

export const SignUp = () => {
	const { store, actions } = useContext(Context);
	const [step, setStep] = useState(1);
	const [user, setUser] = useState({
		name: null,
		email: null,
		phone: null,
		address: null
	});

	const [personalInfo, setPersonalInfo] = useState({
		height: null,
		weight: null,
		diet: null
	});
	const personalValues = {
		height: personalInfo.height,
		weight: personalInfo.weight,
		diet: personalInfo.diet
	};
	const userValues = {
		name: user.name,
		email: user.email,
		phone: user.phone,
		address: user.address
	};

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	const handleInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handleStepTwoInput = e => {
		setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
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
						value={userValues.name}
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
						value={userValues.email}
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
						value={userValues.phone}
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
						value={userValues.address}
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
						name="name"
						onChange={handleInput}
						// value={userValues.name}
					/>
					<label className="form-label" htmlFor="pw-input">
						Password
					</label>
				</div>

				<button type="button" className="btn btn-primary btn-rounded form-control" onClick={() => proceed()}>
					Continue
				</button>
			</form>
		</div>
	);
};
