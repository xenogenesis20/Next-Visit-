import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/singleMedCard.scss";
import * as mdb from "mdb-ui-kit"; // lib

export const SingleSymptomCard = props => {
	const { actions, store } = useContext(GlobalState);
	const [symptoms, setSymptoms] = useState(props.entity);
	const [note, setNote] = useState({});
	const [displayNote, setDisplayNote] = useState(false);

	const handleInput = e => {
		setSymptoms({ ...symptoms, [e.target.name]: e.target.value });
	};
	const confirmNewSymptom = symp => {
		actions.editUserSymptom(symp);
	};

	const confirmNewNote = (id, note) => {
		actions.addSymptomNote(id, note);
		setDisplayNote(!displayNote);
	};

	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});

	return (
		<>
			<div className="med-card-and-med-info d-flex justify-content-center row mb-2">
				<div className=" d-flex justify-content-center">
					<div className="card border border-primary shadow-0" style={{ width: "40vw", height: "45vh" }}>
						<div className="card-header text-center">
							<h3>{props.entity.symptomName}</h3>
						</div>
						<div className="card-body p-2">
							{/* Start med info inside card body */}
							<div className="list-group">
								<div className="list-group-item">
									<div className="d-flex w-100 justify-content-around">
										<h6 className="mb-1">Start Date:</h6>
										<h6 className="mb-1">{props.entity.startDate} </h6>
									</div>
								</div>
								<div className="list-group-item">
									<div className="d-flex w-100 justify-content-around">
										<h6 className="mb-1">How severe is the symptom:</h6>
										<h6 className="mb-1">{props.entity.severity}</h6>
									</div>
								</div>
								<div className="list-group-item">
									<div className="d-flex w-100 justify-content-around">
										<h6 className="mb-1">Symptom location:</h6>
										<h6 className="mb-1">{props.entity.location}</h6>
									</div>
								</div>
								<div className="list-group-item">
									<div className="d-flex w-100 justify-content-around">
										<h6 className="mb-1">Symptom Frequency:</h6>
										<h6 className="mb-1">{props.entity.frequency}</h6>
									</div>
								</div>
								<div className="list-group-item">
									<div className="d-flex w-100 justify-content-around">
										<h6 className="mb-1">Symptom Duration:</h6>
										<h6 className="mb-1">{props.entity.duration}</h6>
									</div>
								</div>
							</div>
							{/* End med info inside card body */}
							<div className="d-flex w-100 justify-content-around m-1">
								<button
									type="button"
									className="btn btn-primary"
									data-mdb-toggle="modal"
									data-mdb-target={`#editSymp-${props.id}`}>
									Edit
									<i className="fas fa-pencil-alt mr-3" />
								</button>
								<button
									className="btn btn btn-danger"
									onClick={() => actions.deleteUserSymptom(props.id)}>
									Delete
									<i className="fas fa-trash-alt" />
								</button>
								<button
									type="button"
									className="btn btn-secondary"
									onClick={() => setDisplayNote(!displayNote)}>
									Add a note
								</button>
							</div>
							<div />
						</div>
					</div>
				</div>
			</div>
			{displayNote ? (
				<div className="note-wrapper">
					<div className="form-outline bg-light mb-3 p-1">
						<input
							type="text"
							id="date"
							className="form-control"
							name="date"
							onChange={e => setNote({ ...note, date: e.target.value })}
						/>
						<label className="form-label" htmlFor="startDate">
							Date 00/00/0000:
						</label>
					</div>
					<div className="form-outline bg-light mb-3 p-1">
						<input
							type="number"
							id="severity"
							className="form-control"
							name="severity"
							onChange={e => setNote({ ...note, severity: e.target.value })}
						/>
						<label className="form-label" htmlFor="startDate">
							Severity
						</label>
					</div>
					<div className="input-group">
						<span className="input-group-text">Note</span>
						<textarea
							className="form-control"
							aria-label="With textarea"
							onChange={e => setNote({ ...note, description: e.target.value })}
						/>
					</div>
					<button type="button" className="btn btn-success" onClick={() => confirmNewNote(props.id, note)}>
						Save note
					</button>
				</div>
			) : (
				""
			)}

			{/* Edit symptom modal */}
			<div
				className="modal fade"
				id={`editSymp-${props.id}`}
				tabIndex="-1"
				aria-labelledby="addSymptomModal"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="addSymptomModal">
								Edit {symptoms.symptomName}
							</h5>
							<button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" />
						</div>
						<div className="modal-body">
							<form>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="sympName"
										className="form-control"
										name="symptomName"
										onChange={handleInput}
										value={symptoms.symptomName}
									/>
									<label className="form-label" htmlFor="sympName">
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
										start date:
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
										Symptom Severity:
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="location-input"
										className="form-control"
										name="location"
										onChange={handleInput}
										value={symptoms.location}
									/>
									<label className="form-label" htmlFor="location-input">
										symptom location:
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="frequency-input"
										className="form-control"
										name="frequency"
										onChange={handleInput}
										value={symptoms.frequency}
									/>
									<label className="form-label" htmlFor="frequency-input">
										Frequency:
									</label>
								</div>
								<div className="form-outline bg-light mb-3 p-1">
									<input
										type="text"
										id="duration-input"
										className="form-control"
										name="duration"
										onChange={handleInput}
										value={symptoms.duration}
									/>
									<label className="form-label" htmlFor="duration-input">
										Duration:
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
			{/* Edit symptom modal */}
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SingleSymptomCard.propTypes = {
	// history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
SingleSymptomCard.defaultProps = {
	onDelete: null
};
