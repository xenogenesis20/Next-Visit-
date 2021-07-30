import React, { useState, useEffect, useContext } from "react";
import "../../styles/SmallMedCard.scss";
import PropTypes from "prop-types";
import { GlobalState } from "../store/appContext";

export const SmallVisitCard = props => {
	const { store, actions } = useContext(GlobalState);
	const [visit, setVisit] = useState(store.allVisits[props.index]);
	// console.log(props.entity);
	return (
		<div
			className="card text-center text-dark bg-light my-4 mx-3 p-3 border border-primary rounded shadow"
			style={{ width: "24rem" }}>
			<div className="card-body d-block justify-content-between align-items-center p-1">
				<p className="card-title d-flex justify-content-between">
					<span>Doctor: {visit.doctor}</span>
					<span>Date: {visit.date}</span>
				</p>
				<div className="mt-2 pt-2 border-top d-flex justify-content-around">
					<button type="button" className="btn btn-primary btn-sm">
						Details
					</button>
					<button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
SmallVisitCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	entity: PropTypes.object,
	index: PropTypes.number,
	id: PropTypes.number
};
