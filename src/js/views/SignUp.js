import React, { useEffect, useContext, useState } from "react";
import * as mdb from "mdb-ui-kit"; // lib
import { Context } from "../store/appContext";
import { SignupStepOne } from "../component/SignupStepOne";
import { SignupStepTwo } from "../component/SignupStepTwo";

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

	const Uservalues = {
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

	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	switch (step) {
		case 1:
			return <SignupStepOne nextStep={nextStep} handleInput={handleInput} values={Uservalues} />;
		case 2:
			return <SignupStepTwo nextStep={nextStep} prevStep={prevStep} handleInput={handleInput} />;
		case 3:
			return <h1>Form step 3</h1>;
		case 4:
			return <h1>Success!</h1>;
		default:
			break;
	}
};
