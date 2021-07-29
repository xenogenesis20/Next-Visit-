import React, { useEffect, useState, useContext } from "react";
import "../../styles/home.scss";
import { SingleMedicationCard } from "./SingleMedicationCard";
import * as mdb from "mdb-ui-kit"; // lib
import { GlobalState } from "../store/appContext";
import { EditMedModal } from "./EditMedModal";

export const YourMedications = () => {
	const { store, actions } = useContext(GlobalState);
	const [medList, setMedList] = useState(null);
	const [display, setDisplay] = useState(false);
	const [medications, setMedications] = useState({
		id: store.allUserMedications.length,
		name: "",
		dose: "",
		frequency: "",
		reason: "",
		sideEffects: ""
	});
	const [state, setState] = useState({
		showModal: false,
		id: "0"
	});
	const stateSetter = medId => {
		setState({ showModal: true, id: medId });
	};

	const handleInput = e => {
		setMedications({ ...medications, [e.target.name]: e.target.value });
	};
	const confirmNewMedication = med => {
		actions.addUserMedication(med);
		setMedications({
			id: store.allUserMedications.length,
			name: "",
			dose: "",
			frequency: "",
			reason: "",
			sideEffects: ""
		});
	};
	useEffect(
		() => {
			fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?sf=DISPLAY_NAME&terms=${medications.name}`)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					// Read the response as json.
					return response.json();
				})
				.then(function(responseAsJson) {
					// Do stuff with the JSON
					// console.log("response log", responseAsJson);
					setMedList(responseAsJson[1]);
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		},
		[medications.name]
	);

	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});

	const selectMedication = med => {
		setMedications({ ...medications, name: med });
		setDisplay(false);
	};

	return (
		<>
			<div className="row">
				<div className="col">
					<h1>Your Medications</h1>
					<div />
					<button type="button" className="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#addMed">
						Add a new medication.
					</button>
				</div>
			</div>
			{store.allUserMedications &&
				store.allUserMedications.map((medication, index) => (
					<SingleMedicationCard
						key={index}
						entity={medication}
						id={store.allUserMedications[index].id}
						onDelete={() => stateSetter(medication.id)}
					/>
				))}
			{/* add med modal */}
			<div
				className="modal fade"
				id="addMed"
				tabIndex="-1"
				aria-labelledby="addMedicationModal"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addMedicationModal">
								Add a medication
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<form>
							<div className="modal-body">
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="rxterms"
										className="form-control"
										name="name"
										onChange={handleInput}
										onClick={() => setDisplay(!display)}
										// onBlur={() => setDisplay(!display)}
										autoComplete="off"
										value={medications.name}
									/>
									<label className="form-label" htmlFor="rxterms">
										Medication name
									</label>
									{display && (
										<div className="autoContainer">
											{medList.map((v, i) => {
												return (
													<div onClick={() => selectMedication(v)} className="option" key={i}>
														<span>{v}</span>
													</div>
												);
											})}
										</div>
									)}
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="drug_strength"
										className="form-control"
										name="dose"
										onChange={handleInput}
										value={medications.dose}
									/>
									<label className="form-label" htmlFor="drug_strength">
										Current dose
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="frequency-input"
										className="form-control"
										name="frequency"
										onChange={handleInput}
										value={medications.frequency}
									/>
									<label className="form-label" htmlFor="frequency-input">
										How often do you take it
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="reason-input"
										className="form-control"
										name="reason"
										onChange={handleInput}
										value={medications.reason}
									/>
									<label className="form-label" htmlFor="reason-input">
										Reason for medication
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="sideEffects-input"
										className="form-control"
										name="sideEffects"
										onChange={handleInput}
										value={medications.sideEffects}
									/>
									<label className="form-label" htmlFor="sideEffects-input">
										Side effects
									</label>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => confirmNewMedication(medications)}>
									Save changes
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
