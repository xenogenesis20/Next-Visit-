import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/singleMedCard.scss";
import * as mdb from "mdb-ui-kit"; // lib

export const SingleSymptomCard = props => {
	const { actions, store } = useContext(GlobalState);

	console.log(props.entity);
	useEffect(() => {
		document.querySelectorAll(".form-outline").forEach(formOutline => {
			new mdb.Input(formOutline).update();
		}, []);
	});
	const [note, setNote] = useState({});

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
								<Link to={"/edit/"}>
									<button type="button" className="btn btn-primary">
										Edit
										<i className="fas fa-pencil-alt mr-3" />
									</button>
								</Link>
								<button
									className="btn btn btn-danger"
									onClick={() => actions.deleteUserSymptom(props.id)}>
									Delete
									<i className="fas fa-trash-alt" />
								</button>
								<button type="button" className="btn btn-secondary">
									Add a note
								</button>
							</div>
							<div />
						</div>
					</div>
				</div>
			</div>
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
					<span className="input-group-text">With textarea</span>
					<textarea
						className="form-control"
						aria-label="With textarea"
						onChange={e => setNote({ ...note, description: e.target.value })}
					/>
				</div>
				<button type="button" className="btn btn-success">
					Save note
				</button>
			</div>
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
