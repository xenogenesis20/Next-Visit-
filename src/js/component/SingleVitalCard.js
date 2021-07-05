import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleVitalCard = props => {
	const { store, actions } = useContext(GlobalState);
	const [vitalList, setVitalList] = useState([]);
	const [vitals, setVitals] = useState({
		height: "",
		weight: "",
		heartRate: "",
		bloodPressure: "",
		bloodType: "",
		bodyTemperature: "",
		oxySaturation: ""
	});

	const populateEditCard = id => {
		let vitalToEdit = store.allUserVitals.filter(vital => vital["id"] == id);
		setVitals(vitalToEdit[0]);
	};

	const handleInput = e => {
		setVitals({ ...vitals, [e.target.name]: e.target.value });
	};

	const confirmNewVital = vital => {
		console.log(vital);
		actions.editUserVital(vital);
		setVitals({
			id: store.allUserVitals.length,
			height: "",
			weight: "",
			heartRate: "",
			bloodPressure: "",
			bloodType: "",
			bodyTemperature: "",
			oxySaturation: ""
		});
	};

	// console.log(props.entity);

	return (
		<>
			<div className="card border border-primary shadow-0" style={{ width: "35vw" }}>
				<div className="card-header text-center">
					<h3>{props.entity.vitalName}</h3>
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
								Edit {vitals.vitalName}
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
										value={vitals.vitalName}
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
										value={vitals.dose}
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
										value={vitals.frequency}
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
										value={vitals.reason}
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
										value={vitals.sideEffects}
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
							<button type="button" className="btn btn-primary" onClick={() => confirmNewVital(vitals)}>
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
SingleVitalCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
SingleVitalCard.defaultProps = {
	onDelete: null
};
