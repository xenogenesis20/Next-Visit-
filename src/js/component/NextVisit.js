import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import * as mdb from "mdb-ui-kit"; // lib

export const NextVisit = () => {
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});

	const { store, actions } = useContext(GlobalState);
	const [sympList, setsympList] = useState([]);
	const [display, setDisplay] = useState(false);

	// SYMPLIST MAP IS NOT DISPLAYING THE NAMES IN THE SELECT INPUT

	const addSymptomToDrVisit = symptom => {
		setsympList([...sympList, symptom]);
	};

	return (
		<>
			<div className="row">
				<div className="col">PLan your next doctor visit.</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							data-mdb-toggle="dropdown"
							aria-expanded="false">
							Dropdown form
						</button>
						<div className="dropdown-menu" style={{ width: "500px" }}>
							<form className="px-4 py-3">
								{/* <!-- Email input --> */}
								<div className="form-outline mb-4">
									<input type="text" id="visitingDoctor" className="form-control" />
									<label className="form-label" htmlFor="visitingDoctor">
										Visiting doctor:
									</label>
								</div>

								{/* <!-- Password input --> */}
								<div className="form-outline mb-4">
									<input type="date" id="visitDate" className="form-control" />
									<label className="form-label" htmlFor="visitDate">
										Date of visit:
									</label>
								</div>

								{/* <!-- symptom picker --> */}
								<div className="form-group bg-light mb-3 p-1">
									<label htmlFor="exampleFormControlSelect1">Vital Name</label>
									<select className="form-control" id="exampleFormControlSelect1" name="symptom">
										{sympList.map((symp, ind) => {
											console.log(symp);
											<option>{symp.symptomName}</option>;
										})}
									</select>
								</div>
								<div className="form-outline mb-4">
									<input
										type="text"
										id="symptoms"
										className="form-control"
										onClick={() => setDisplay(!display)}
										value={sympList.map((symp, ind) => {
											console.log(symp);
											symp.symptomName;
										})}
									/>
									<label className="form-label" htmlFor="symptoms">
										Visit is about these symptoms:
									</label>
									{display && (
										<div className="autoContainer">
											{store.allUserSymptoms.map((symptom, i) => {
												console.log(symptom);
												return (
													<div
														onClick={() => addSymptomToDrVisit(symptom)}
														className="option"
														key={i}>
														<span>{symptom.symptomName}</span>
													</div>
												);
											})}
										</div>
									)}
								</div>

								{/* <!-- 2 column grid layout for inline styling --> */}
								<div className="row mb-4">
									<div className="col d-flex justify-content-center">
										{/* <!-- Checkbox --> */}
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												value=""
												id="form2Example3"
												checked
											/>
											<label className="form-check-label" htmlFor="form2Example3">
												{" "}
												Remember me{" "}
											</label>
										</div>
									</div>

									<div className="col">
										{/* <!-- Simple link --> */}
										<a href="#!">Forgot password?</a>
									</div>
								</div>

								{/* <!-- Submit button --> */}
								<button type="submit" className="btn btn-primary btn-block">
									Sign in
								</button>
							</form>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								New around here? Sign up
							</a>
							<a className="dropdown-item" href="#">
								Forgot password?
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
