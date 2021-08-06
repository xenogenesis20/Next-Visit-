import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/singleMedCard.scss";
import * as mdb from "mdb-ui-kit"; // lib
import { NoteCard } from "./NoteCard";
import { BarGraph } from "./BarGraph";

export const SingleVisitCard = props => {
	const { actions, store } = useContext(GlobalState);

	const [symptoms, setSymptoms] = useState(props.entity);
	const [note, setNote] = useState({});
	const [displayNote, setDisplayNote] = useState(false);

	// console.log(props.entity);

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
					<div className="col">
						<div className="card m-2" style={{ width: "80vw" }}>
							<div className="card-header text-center">
								<h3>Visiting: Dr. {props.entity.doctor}</h3>
							</div>
							<div className="card-body p-2">
								{/* Start med info inside card body */}
								<div className="list-group">
									<div className="list-group-item">
										<div className="d-flex w-100 justify-content-between px-5">
											<h6 className="mb-1">Date:</h6>
											<h6 className="mb-1">{props.entity.date} </h6>
										</div>
									</div>
									<div className="list-group-item">
										<div className="d-flex w-100 justify-content-between px-5">
											<h6 className="mb-1">Time:</h6>
											<h6 className="mb-1">{props.entity.time}</h6>
										</div>
									</div>
									<div className="list-group-item">
										<div className="d-flex w-100 justify-content-between px-5">
											<h6 className="mb-1">Symptoms added:</h6>
											<h6 className="mb-1">
												{props.entity.symptoms.map((symptom, i) => (
													<span key={i}>{symptom.symptomName},</span>
												))}
											</h6>
										</div>
									</div>
									<div className="list-group-item">
										<div className="d-flex w-100 justify-content-between px-5">
											<h6 className="mb-1">Medications added:</h6>
											<h6 className="mb-1">
												{props.entity.meds.map((med, i) => (
													<span key={i}>{med.name}, </span>
												))}
											</h6>
										</div>
									</div>
									{/* <div className="list-group-item">
										<div className="d-flex w-100 justify-content-between px-5">
											<h6 className="mb-1">Vitals added:</h6>
											<h6 className="mb-1">
												{props.entity.vitals.map((vital, i) => (
													<span key={i}>{vital.vitalName}</span>
												))}
											</h6>
										</div>
									</div> */}
								</div>
								{/* End med info inside card body */}
								<div className="card-footer">
									<div className="d-flex w-100 justify-content-between px-5 m-1">
										<Link to={"/DashboardVisitDetails/" + props.entity.id}>
											<button type="button" className="btn btn-primary">
												Details
												<i className="fas fa-pencil-alt mr-3" />
											</button>
										</Link>
										<button
											className="btn btn btn-danger"
											onClick={() => actions.deleteUserSymptom(props.entity.id)}>
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
									{displayNote ? (
										<div className="note-wrapper">
											<div className="form-outline bg-light mb-3 p-1">
												<input
													type="date"
													id="date"
													className="form-control"
													name="date"
													onChange={e =>
														setNote({
															...note,
															date: e.target.value,
															id: `${props.entity.id}${props.entity.notes.length}`
														})
													}
												/>
												{/* <label className="form-label" htmlFor="startDate">
													Date 00/00/0000:
												</label> */}
											</div>
											<div className="form-outline bg-light mb-3 p-1">
												<input
													min="0"
													max="10"
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
											<button
												type="button"
												className="btn btn-success"
												onClick={() => confirmNewNote(props.entity.id, note)}>
												Save note
											</button>
										</div>
									) : (
										""
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="col">
						{props.entity.notes &&
							props.entity.notes.map((val, ind) => {
								return (
									<NoteCard
										key={ind}
										positionOfSymptom={props.positionOfSymptom}
										symptomNotes={val}
										notePos={ind}
									/>
								);
							})}
					</div>
					<div className="col">
						{props.entity.notes && props.entity.notes.length > 0 ? (
							<BarGraph symptomNotes={props.entity.notes} />
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SingleVisitCard.propTypes = {
	// history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	id: PropTypes.number,
	positionOfSymptom: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
SingleVisitCard.defaultProps = {
	onDelete: null
};
