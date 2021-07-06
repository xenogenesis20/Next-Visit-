import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../../styles/singleMedCard.scss";

export const SingleMedicationCard = props => {
	const { store, actions } = useContext(GlobalState);
	const [medications, setMedications] = useState({
		id: store.allUserMedications.length,
		medicationName: "",
		dose: "",
		frequency: "",
		reason: "",
		sideEffects: ""
	});
	const [medicationData, setMedicationData] = useState([]);
	const [medlist, setMedList] = useState([]);

	const populateEditCard = id => {
		let medToEdit = store.allUserMedications.filter(medication => medication["id"] == id);
		setMedications(medToEdit[0]);
	};

	const handleInput = e => {
		setMedications({ ...medications, [e.target.name]: e.target.value });
	};

	const confirmNewMedication = med => {
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

	useEffect(
		() => {
			fetch(`https://api.fda.gov/drug/label.json?search=adverse_reactions:${props.entity.medicationName}`)
				.then(function(response) {
					if (!response.ok) {
						throw Error(response.statusText);
					}
					return response.json();
				})
				.then(function(responseAsJson) {
					console.log("response log", responseAsJson);
					setMedicationData(responseAsJson.results);
				})
				.catch(function(err) {
					console.log("Fetch Error :-S", err);
				});
		},
		[medications]
	);

	useEffect(
		() => {
			console.log("Medication data hook:", medicationData);
		},
		[medicationData]
	);

	return (
		<>
			<div className="med-card-and-med-info d-flex justify-content-center row mb-2">
				<div className="col d-flex justify-content-center">
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
				</div>
				<div className="col d-flex justify-content-center">
					<div className="card" style={{ width: "35vw", height: "20rem" }}>
						<div className="card-header text-center">
							<h3>{props.entity.medicationName}</h3>
						</div>

						<div className="card-body" style={{ height: "20rem", overflowY: "scroll" }}>
							{/* Nav tabs start */}
							<Tabs>
								<TabList>
									<Tab>Description</Tab>
									<Tab>Adverse Reactions</Tab>
									<Tab>Dosage Forams and Strengths</Tab>
									<Tab>Information for Patients</Tab>
									<Tab>Warnings and Cautions</Tab>
								</TabList>
								<TabPanel>
									<p>{medicationData.length > 0 && medicationData[0].description}</p>
								</TabPanel>
								<TabPanel>
									<p>{medicationData.length > 0 && medicationData[0].adverse_reactions}</p>
								</TabPanel>
								<TabPanel>
									<p>{medicationData.length > 0 && medicationData[0].dosage_forms_and_strengths}</p>
								</TabPanel>
								<TabPanel>
									<p>{medicationData.length > 0 && medicationData[0].information_for_patients}</p>
								</TabPanel>
								<TabPanel>
									<p>{medicationData.length > 0 && medicationData[0].warnings_and_cautions}</p>
								</TabPanel>
							</Tabs>
							{/* Nav tabs end */}
						</div>
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
