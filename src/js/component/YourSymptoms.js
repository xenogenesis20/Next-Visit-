import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleSymptomCard } from "./SingleSymptomCard";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";

export const YourSymptoms = () => {
	const { store, actions } = useContext(GlobalState);
	const [symptoms, setSymptoms] = useState({
		id: store.allUserSymptoms.length,
		symptomName: "",
		startDate: "",
		severity: "",
		location: "",
		frequency: "",
		duration: "",
		notes: []
	});
	const handleInput = e => {
		setSymptoms({ ...symptoms, [e.target.name]: e.target.value });
	};
	const confirmNewSymptom = sym => {
		actions.addUserSymptom(sym);
		setSymptoms({
			id: store.allUserSymptoms.length,
			symptomName: "",
			startDate: "",
			severity: "",
			location: "",
			frequency: "",
			duration: ""
		});
	};
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});

	return (
		<>
			<h1>Your Symptoms</h1>
			<button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
				Add a new symptom.
			</button>
			{store.allUserSymptoms &&
				store.allUserSymptoms.map((symptom, index) => {
					return (
						<SingleSymptomCard
							key={index}
							entity={symptom}
							onDelete={() => stateSetter(index)}
							id={store.allUserSymptoms[index].id}
						/>
					);
				})}
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add a Symptom
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="symptom"
										className="form-control"
										name="symptomName"
										onChange={handleInput}
										autoComplete="off"
										value={symptoms.symptomName}
									/>
									<label className="form-label" htmlFor="symptom">
										Symptom name
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="startDate"
										className="form-control"
										name="startDate"
										onChange={handleInput}
										value={symptoms.startDate}
									/>
									<label className="form-label" htmlFor="startDate">
										When did this symptom start
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="number"
										id="severity"
										className="form-control"
										name="severity"
										onChange={handleInput}
										value={symptoms.severity}
									/>
									<label className="form-label" htmlFor="severity">
										Severity 1-10
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="symptomLocation"
										className="form-control"
										name="location"
										onChange={handleInput}
										value={symptoms.location}
									/>
									<label className="form-label" htmlFor="symptomLocation">
										Location of symptom
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="frequency"
										className="form-control"
										name="frequency"
										onChange={handleInput}
										value={symptoms.frequency}
									/>
									<label className="form-label" htmlFor="frequency">
										How often does it occur?
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="duration"
										className="form-control"
										name="duration"
										onChange={handleInput}
										value={symptoms.duration}
									/>
									<label className="form-label" htmlFor="duration">
										How long does it last?
									</label>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={() => confirmNewSymptom(symptoms)}>
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
