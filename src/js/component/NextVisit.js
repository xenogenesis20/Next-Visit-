import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { FaWindowClose } from "react-icons/fa";
import * as mdb from "mdb-ui-kit"; // lib

export const NextVisit = () => {
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});

	const { store, actions } = useContext(GlobalState);
	const [sympList, setsympList] = useState([]);
	const [medList, setmedList] = useState([]);
	const [vitalList, setvitalList] = useState([]);
	const [display, setDisplay] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const [visit, setVisit] = useState([]);

	// SYMPLIST MAP IS NOT DISPLAYING THE NAMES IN THE SELECT INPUT
	// ALSO NEED X TO REMOVE SYMP FROM LIST USING A FILTER FUNCTION

	const addSymptomToDrVisit = symptom => {
		setsympList([...sympList, symptom]);
	};

	const deleteSympFromList = id => {
		let newSympList = sympList.filter(symptom => id != symptom.id);
		setsympList(newSympList);
	};

	return (
		<>
			<div className="row">
				<div className="col">PLan your next doctor visit.</div>
			</div>

			<button type="button" className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
				Add new Dr Visit
			</button>
			{showForm && (
				<div className="row">
					<div className="col">
						<form className="px-4 py-3">
							{/* <!-- Visiting dr --> */}
							<div className="form-outline mb-4">
								<input type="text" id="visitingDoctor" className="form-control" />
								<label className="form-label" htmlFor="visitingDoctor">
									Visiting doctor:
								</label>
							</div>

							{/* <!-- date input --> */}
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
									{store.allUserSymptoms.map((symp, ind) => {
										return <option key={ind}>{symp.symptomName}</option>;
									})}
								</select>
							</div>

							<div className="form-outline mb-4">
								<input
									type="text"
									id="symptoms"
									className="form-control"
									onClick={() => setDisplay(!display)}
								/>
								<label className="form-label" htmlFor="symptoms">
									Add symptoms to this visit:
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
									<div className="symp">
										{sympList.map((symp, ind) => {
											console.log(symp);
											return (
												<div key={ind}>
													{symp.symptomName}
													<span onClick={() => deleteSympFromList(symp.id)}>
														{" "}
														<FaWindowClose />{" "}
													</span>
												</div>
											);
										})}
									</div>
								</div>

								<div className="col">{/* <!-- Simple link --> */}</div>
							</div>

							{/* <!-- Submit button --> */}
						</form>
						<button className="btn btn-primary btn-block" onClick={() => setShowForm(!showForm)}>
							Save
						</button>
					</div>
				</div>
			)}
			<div className="visit-box">
				{sympList > 0 &&
					sympList.map((symp, ind) => {
						return (
							<div key={ind}>
								<div className="card">
									<div className="card-body">
										<div className="list-group">
											<div className="list-group-item">
												<div className="d-flex w-100 justify-content-around">
													<h6 className="mb-1">Start Date:</h6>
													<h6 className="mb-1">{symp.startDate} </h6>
												</div>
											</div>
											<div className="list-group-item">
												<div className="d-flex w-100 justify-content-around">
													<h6 className="mb-1">How severe is the symptom:</h6>
													<h6 className="mb-1">{symp.severity}</h6>
												</div>
											</div>
											<div className="list-group-item">
												<div className="d-flex w-100 justify-content-around">
													<h6 className="mb-1">Symptom location:</h6>
													<h6 className="mb-1">{symp.location}</h6>
												</div>
											</div>
											<div className="list-group-item">
												<div className="d-flex w-100 justify-content-around">
													<h6 className="mb-1">Symptom Frequency:</h6>
													<h6 className="mb-1">{symp.frequency}</h6>
												</div>
											</div>
											<div className="list-group-item">
												<div className="d-flex w-100 justify-content-around">
													<h6 className="mb-1">Symptom Duration:</h6>
													<h6 className="mb-1">{symp.duration}</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
