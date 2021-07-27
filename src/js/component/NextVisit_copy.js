import React, { useEffect, useState, useContext } from "react";
import { GlobalState } from "../store/appContext";
import { SingleVisitCard } from "../component/SingleVisitCard";
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
	const [medList, setMedList] = useState([]);
	const [vitalList, setVitalList] = useState([]);
	const [doctorName, setDoctorName] = useState("");
	const [time, setTime] = useState("");
	const [date, setDate] = useState("");
	const [display, setDisplay] = useState(false);
	const [showForm, setShowForm] = useState(false);

	const handleInput = e => {
		setVisit({ ...visit, [e.target.name]: e.target.value });
	};

	const saveDrVisit = () => {
		actions.addVisit({
			id: store.allVisits.length,
			doctor: doctorName,
			date: date,
			time: time,
			symptoms: sympList,
			meds: medList,
			vitals: vitalList
		});
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
								<label className="form-label" htmlFor="visitDate">
									Date of visit:
								</label>
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
									<div className="autoContainer">
										{store.allUserVitals.map((vital, i) => {
											return (
												<div
													onClick={() => setVitalList([...vitalList, vital])}
													className="option"
													key={i}>
													<span className="badge badge-pill badge-primary p-3">
														{vital.name}
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
									<div className="autoContainer">
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
									<ul className="list-group symp">
										{vitalList.map((vital, ind) => {
											return (
												<li
													key={ind}
													className="list-group-item bg-secondary text-light shadow rounded p-3">
													{vital.name}
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
									<ul className="list-group symp">
										{sympList.map((symp, ind) => {
											return (
												<ul
													key={ind}
													className="list-group-item bg-secondary text-light shadow rounded p-3">
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
									<ul className="list-group symp">
										{medList.map((med, ind) => {
											return (
												<li
													key={ind}
													className="list-group-item bg-secondary text-light shadow rounded p-3">
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
						<button className="btn btn-primary btn-block" onClick={() => saveDrVisit()}>
							Save
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
