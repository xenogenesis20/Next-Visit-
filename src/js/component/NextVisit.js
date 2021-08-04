import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { SingleVisitCard } from "./SingleVisitCard";
import { FaWindowClose } from "react-icons/fa";
import * as mdb from "mdb-ui-kit"; // lib

export const NextVisit = () => {
	const { store, actions } = useContext(GlobalState);

	const [sympList, setsympList] = useState([]);
	const [medList, setMedList] = useState([]);
	const [vitalList, setVitalList] = useState([]);
	const [doctorName, setDoctorName] = useState("");
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");
	const [display, setDisplay] = useState(false);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});

	const handleInput = e => {
		setVisit({ ...visit, [e.target.name]: e.target.value });
	};

	const saveDrVisit = () => {
		actions.addVisit(doctorName, date, time, sympList, medList, vitalList);
		setShowForm(!showForm);
	};

	const deleteSympFromList = id => {
		let newSympList = sympList.filter(symptom => id != symptom.id);
		setsympList(newSympList);
	};
	const deleteMedFromList = id => {
		let newMedList = medList.filter(med => id != med.id);
		setMedList(newMedList);
	};

	return (
		<>
			<div className="row p-3">
				<div className="col text-center">
					<h3>PLan your next doctor visit.</h3>
				</div>
			</div>

			<button type="button" className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
				Add new Dr Visit
			</button>
			{showForm && (
				<div className="row">
					<div className="col">
						<form className="bg-light px-4 py-3 text-center">
							{/* <!-- Visiting dr --> */}
							<div className="form-outline mb-4">
								<input
									type="text"
									id="visitingDoctor"
									className="form-control"
									name="visitingDr"
									onChange={e => setDoctorName(e.target.value)}
								/>
								<label className="form-label" htmlFor="visitingDoctor">
									Visiting doctor:
								</label>
							</div>

							{/* <!-- date input --> */}
							<div className="form-outline mb-4">
								<input
									type="date"
									id="visitDate"
									className="form-control"
									name="visitDate"
									onChange={e => setDate(e.target.value)}
								/>
							</div>

							{/* <!-- time input --> */}
							<div className="form-outline mb-4">
								<input
									type="time"
									id="visitTime"
									className="form-control"
									onChange={e => setTime(e.target.value)}
								/>
								<label className="form-label" htmlFor="visitTime">
									Time of visit:
								</label>
							</div>

							{/* <!-- symptom picker --> */}
							<div className="form-outline mb-4">
								<input
									type="text"
									id="vitals"
									className="form-control"
									onClick={() => setDisplay(!display)}
								/>
								<label className="form-label" htmlFor="vitals">
									Add Vitals relevant to this visit:
								</label>
								{display && (
									<div className="autoContainer d-flex">
										{["Heart Rate", "Height", "Blood Pressure", "Weight"].map((vital, i) => {
											return (
												<div
													onClick={() => setVitalList([...vitalList, vital])}
													className="option"
													key={i}>
													<span className="badge badge-pill badge-primary p-3">{vital}</span>
												</div>
											);
										})}
									</div>
								)}
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
									<div className="autoContainer d-flex">
										{store.allUserSymptoms.map((symptom, i) => {
											return (
												<div
													onClick={() => setsympList([...sympList, symptom])}
													className="option"
													key={i}>
													<span className="badge badge-pill badge-primary p-3">
														{symptom.symptomName}
													</span>
												</div>
											);
										})}
									</div>
								)}
							</div>
							<div className="form-outline mb-4">
								<input
									type="text"
									id="meds"
									className="form-control"
									onClick={() => setDisplay(!display)}
								/>
								<label className="form-label" htmlFor="meds">
									Add medications to this visit:
								</label>
								{display && (
									<div className="autoContainer d-flex">
										{store.allUserMedications.map((med, i) => {
											return (
												<div
													onClick={() => setMedList([...medList, med])}
													className="option"
													key={i}>
													<span className="badge badge-pill badge-primary p-3">
														{med.name}
													</span>
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
									<ul className="symp">
										{vitalList.map((vital, ind) => {
											return (
												<li
													key={ind}
													className="bg-secondary text-light shadow rounded px-3 py-2 my-1">
													{vital}
													<span>
														{" "}
														<FaWindowClose />{" "}
													</span>
												</li>
											);
										})}
									</ul>
								</div>
								<div className="col d-flex justify-content-center">
									{/* <!-- Checkbox --> */}
									<ul className="symp">
										{sympList.map((symp, ind) => {
											return (
												<ul
													key={ind}
													className="bg-secondary text-light shadow rounded px-3 py-2 my-1">
													{symp.symptomName}
													<span onClick={() => deleteSympFromList(symp.id)}>
														{" "}
														<FaWindowClose />{" "}
													</span>
												</ul>
											);
										})}
									</ul>
								</div>
								<div className="col d-flex justify-content-center">
									{/* <!-- Checkbox --> */}
									<ul className="symp">
										{medList.map((med, ind) => {
											return (
												<li
													key={ind}
													className="bg-secondary text-light shadow rounded px-3 py-2 my-1">
													{med.name}
													<span onClick={() => deleteMedFromList(med.id)}>
														{" "}
														<FaWindowClose />{" "}
													</span>
												</li>
											);
										})}
									</ul>
								</div>
							</div>

							{/* <!-- Submit button --> */}
						</form>
						<button type="text" className="btn btn-primary btn-lg px-5" onClick={() => saveDrVisit()}>
							Save Visit
						</button>
					</div>
				</div>
			)}
			<div className="visit-box">
				{store.allVisits.map((visit, i) => {
					return <SingleVisitCard entity={visit} key={i} />;
				})}
			</div>
		</>
	);
};
