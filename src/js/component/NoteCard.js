import React from "react";
import PropTypes from "prop-types";

export const NoteCard = props => {
	return (
		<div className="card">
			<div className="card-body">
				<p className="card-text">Note Date : {props.symptomNotes.date}</p>
				<p className="card-text">Severity : {props.symptomNotes.severity}</p>
				<p className="card-text">Note : {props.symptomNotes.note}</p>
			</div>
		</div>
	);
};
NoteCard.propTypes = {
	// history: PropTypes.object,

	symptomNotes: PropTypes.object,
	id: PropTypes.number
};
