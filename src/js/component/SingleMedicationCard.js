import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import "../../styles/singleMedCard.scss";

export const SingleMedicationCard = props => {
	const { store, actions } = useContext(GlobalState);
	const [medlist, setMedList] = useState([]);
	const [medications, setMedications] = useState({
		id: store.allUserMedications.length,
		medicationName: "",
		dose: "",
		frequency: "",
		reason: "",
		sideEffects: ""
	});

	const populateEditCard = id => {
		let medToEdit = store.allUserMedications.filter(medication => medication["id"] == id);
		setMedications(medToEdit[0]);
	};

	const handleInput = e => {
		setMedications({ ...medications, [e.target.name]: e.target.value });
	};

	const confirmNewMedication = med => {
		console.log(med);
		actions.editUserMedication(med);
		setMedications({
			id: store.allUserMedications.length,
			medicationName: "",
			dose: "",
			frequency: "",
			reason: "",
			sideEffects: ""
		});
	};

	useEffect(() => {
		fetch(
			`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?df=info_link_data&authenticity_token=&terms=${dynamicValue}`
		)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				console.log("response log", responseAsJson.results);
				setMedList(responseAsJson.results);
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});
	}, []);

	return (
		<>
			<div className="card border border-primary shadow-0" style={{ width: "35vw" }}>
				<div className="card-header text-center">
					<h3>{props.entity.medicationName}</h3>
				</div>
				<div className="card-body p-2">
					{/* Start med info inside card body */}
					<div className="list-group">
						<div className="list-group-item">
							<div className="d-flex w-100 justify-content-around">
								<h6 className="mb-1">Current Dose:</h6>
								<h6 className="mb-1">{props.entity.dose} </h6>
							</div>
						</div>
						<div className="list-group-item">
							<div className="d-flex w-100 justify-content-around">
								<h6 className="mb-1">How often do you take it:</h6>
								<h6 className="mb-1">{props.entity.frequency}</h6>
							</div>
						</div>
						<div className="list-group-item">
							<div className="d-flex w-100 justify-content-around">
								<h6 className="mb-1">Symptom target:</h6>
								<h6 className="mb-1">{props.entity.reason}</h6>
							</div>
						</div>
						<div className="list-group-item">
							<div className="d-flex w-100 justify-content-around">
								<h6 className="mb-1">Side effects:</h6>
								<h6 className="mb-1">{props.entity.sideEffects}</h6>
							</div>
						</div>
					</div>
					{/* End med info inside card body */}
					<div className="d-flex w-100 justify-content-around m-1">
						<button
							type="button"
							className="btn btn-primary"
							data-mdb-toggle="modal"
							data-mdb-target="#editMed"
							onClick={() => populateEditCard(props.id)}>
							Edit
							<i className="fas fa-pencil-alt mr-3" />
						</button>

						<button className="btn btn btn-danger">
							Delete
							<i className="fas fa-trash-alt" />
						</button>
					</div>
				</div>
			</div>
			<div className="iframe-wrapper" style={{ width: "35vw" }}>
				Here is some information about your medication.
			</div>
			{/* edit med modal */}
			<div
				className="modal fade"
				id="editMed"
				tabIndex="-1"
				aria-labelledby="addMedicationModal"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addMedicationModal">
								Edit {medications.medicationName}
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="rxterms"
										className="form-control"
										name="medicationName"
										onChange={handleInput}
										value={medications.medicationName}
									/>
									<label className="form-label" htmlFor="rxterms">
										{"Medication name"}
									</label>
									<div>Suggetions here? </div>
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
										type="number"
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
							</form>
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
					</div>
				</div>
			</div>
			{/* edit med modal */}
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SingleMedicationCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
SingleMedicationCard.defaultProps = {
	onDelete: null
};
