import React, { useContext } from "react";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const NoteCard = props => {
	const { store, actions } = useContext(GlobalState);
	return (
		<div className="card m-2 p-2" style={{ width: "33%" }}>
			<div className="card-header">
				<button type="button" className="btn btn-primary btn-floating">
					<i className="fas fa-pencil-alt mr-3" />
				</button>
				<button
					type="button"
					className="btn btn-danger btn-floating"
					onClick={() => actions.deleteSymptomNote(props.positionOfSymptom, props.notePos)}>
					<i className="fas fa-trash-alt" />
				</button>
			</div>
			<div className="card-body">
				<p className="card-text">Note Date : {props.symptomNotes.date}</p>
				<p className="card-text">Severity : {props.symptomNotes.severity}</p>
				<p className="card-text">Note : {props.symptomNotes.description}</p>
			</div>
		</div>
	);
};
NoteCard.propTypes = {
	// history: PropTypes.object,

	symptomNotes: PropTypes.object,
	notePos: PropTypes.number,
	positionOfSymptom: PropTypes.number
};
